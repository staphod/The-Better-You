import React, { useState, useEffect, useCallback } from 'react';
// FIX: Using namespace import for react-router-dom to fix module resolution issues.
import * as ReactRouterDom from 'react-router-dom';
import type { FullTest, Question } from '@/types';
import { fetchTestById } from '@/services/api';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { useDiary } from '@/hooks/useDiary';
import { useTestHistory } from '@/hooks/useTestHistory';
import Sparks from '@/components/Sparks';
import TestResultDisplay from '@/components/TestResultDisplay';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"></div>
    </div>
);

const TestPage: React.FC = () => {
    const { useParams, useNavigate } = ReactRouterDom;
    const { testId } = useParams<{ testId: string }>();
    const navigate = useNavigate();
    const { isOnline } = useOnlineStatus();
    const { addEntry } = useDiary();
    const { addHistoryItem } = useTestHistory();

    const [test, setTest] = useState<FullTest | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [result, setResult] = useState<any | null>(null);
    const [copied, setCopied] = useState(false);
    const [savedToDiary, setSavedToDiary] = useState(false);
    const [showSparks, setShowSparks] = useState(false);
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [chosenAnswerValue, setChosenAnswerValue] = useState<number | null>(null);


    useEffect(() => {
        if (!testId) return;

        if (!isOnline) {
            navigate('/offline');
            return;
        }

        const loadTest = async () => {
            try {
                setLoading(true);
                const testData = await fetchTestById(testId);
                setTest(testData);
                setError(null);
            } catch (err) {
                setError('Failed to load the test. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        loadTest();
    }, [testId, isOnline, navigate]);
    
    const calculateResults = useCallback((finalAnswers: Record<string, number>) => {
        if (!test) return;
        const thresholds = test.scoringThresholds;
        let finalResult: any = null;
        let finalSummary: string = 'Completed';

        // --- Dimensional Test (e.g., Big Five) ---
        if (thresholds && 'O' in thresholds) {
            const scores: { [key: string]: number } = {};
            const levels: { [key: string]: string } = {};

            test.questions.forEach(q => {
                if (q.category && finalAnswers[q.id] !== undefined) {
                    const value = finalAnswers[q.id];
                    const score = q.reverse ? 4 - value : value;
                    scores[q.category] = (scores[q.category] || 0) + score;
                }
            });

            for (const trait in scores) {
                if (scores[trait] <= (thresholds as any)[trait].low) {
                    levels[trait] = 'Low';
                } else if (scores[trait] >= (thresholds as any)[trait].high) {
                    levels[trait] = 'High';
                } else {
                    levels[trait] = 'Average';
                }
            }
            finalResult = { scores, levels };
            finalSummary = `O: ${levels.O}, C: ${levels.C}, E: ${levels.E}, A: ${levels.A}, N: ${levels.N}`;

        // --- Single Score with Levels (e.g., Anxiety, IQ Test) ---
        } else if (thresholds && !('O' in thresholds)) {
             const totalScore = Object.values(finalAnswers).reduce((sum, val) => sum + val, 0);
             // Assumes resultDetails are ordered in the data file from highest tier to lowest tier
             const resultLevels = test.knowledgeBase.resultDetails;
             
             let determinedResultKey = resultLevels[resultLevels.length - 1].key; // Default to the lowest tier

             for (const level of resultLevels) {
                 const minScore = (thresholds as Record<string, number>)[level.key];
                 // Note: minScore can be 0, so check for undefined. The lowest tier won't have a threshold.
                 if (minScore !== undefined && totalScore >= minScore) {
                     determinedResultKey = level.key;
                     break; // Found the highest applicable tier
                 }
             }
             finalResult = test.result_template[determinedResultKey];
             finalSummary = `Result: ${finalResult.level}`;

        // --- Archetype Test (e.g., Procrastination, Enneagram) ---
        } else if (test.questions.some(q => q.category)) {
            const scores: Record<string, number> = {};
            test.questions.forEach(q => {
                if (q.category && finalAnswers[q.id] !== undefined) {
                    scores[q.category] = (scores[q.category] || 0) + finalAnswers[q.id];
                }
            });
    
            let highestScore = -1;
            let resultKey = '';
            for (const category in scores) {
                if (scores[category] > highestScore) {
                    highestScore = scores[category];
                    resultKey = category;
                }
            }
            
            if (resultKey && test.result_template[resultKey]) {
                finalResult = test.result_template[resultKey];
                finalSummary = `Result: ${finalResult.level}`;
            } else {
                setError("Could not determine a result.");
                return;
            }
        
        // --- Simple Score Test (e.g., MBTI) ---
        } else {
            const totalScore = Object.values(finalAnswers).reduce((sum, val) => sum + val, 0);
            const resultKey = totalScore >= 0 ? "high-score" : "low-score";
            finalResult = test.result_template[resultKey];
            finalSummary = "Completed"; // Less specific summary here
        }

        setResult(finalResult);
        addHistoryItem({
            testId: test.id,
            testTitle: test.title,
            dateCompleted: new Date().toISOString(),
            result: finalResult,
            summary: finalSummary,
        });

        setShowSparks(true);
    }, [test, addHistoryItem]);

    const handleAnswerAndAdvance = useCallback((questionId: string, value: number) => {
        if (isAnswered || !test) return;

        setChosenAnswerValue(value);
        setIsAnswered(true);

        const newAnswers = { ...answers, [questionId]: value };
        setAnswers(newAnswers);

        setTimeout(() => {
            if (currentQuestionIndex < test.questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                setIsAnswered(false);
                setChosenAnswerValue(null);
            } else {
                calculateResults(newAnswers);
            }
        }, 500);
    }, [isAnswered, test, answers, currentQuestionIndex, calculateResults]);

    const handleCopy = useCallback(() => {
        if (!result || !test) return;
        let textToCopy = `My ${test.title} Results:\n---\n`;

        if(test.scoringThresholds && 'O' in test.scoringThresholds) {
            textToCopy += Object.keys(result.levels).map(traitKey => {
                 const traitTitle = test.knowledgeBase.resultDetails.find(d => d.key === traitKey)?.title || traitKey;
                 return `${traitTitle}: ${result.levels[traitKey]}`;
            }).join('\n');
        } else {
             textToCopy += result.level ? `${result.level}\n${result.explanation}` : `${result.explanation}`;
        }

        navigator.clipboard.writeText(textToCopy.trim()).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }, [result, test]);

    const handleSaveToDiary = useCallback(() => {
        if (!result || !test) return;
        
        const isDimensional = test.scoringThresholds && 'O' in test.scoringThresholds;
        let content = ``;

        if (isDimensional) {
            content = Object.keys(result.levels).map(traitKey => {
                const traitData = test.result_template[`${traitKey}_${result.levels[traitKey].toLowerCase()}`];
                const traitTitle = test.knowledgeBase.resultDetails.find(d => d.key === traitKey)?.title || traitKey;
                return `<h3>${traitTitle}: ${result.levels[traitKey]}</h3><p>${traitData.explanation}</p>`;
            }).join('');
        } else {
            content = `<h3>${result.level || 'Result'}</h3><p>${result.explanation}</p>`;
            if(result.advice) {
                content += `<h4>Advice</h4><ul>${result.advice.map((a: string) => `<li>${a}</li>`).join('')}</ul>`;
            }
             if(result.strategies) {
                content += `<h4>Strategies</h4><ul>${result.strategies.map((s: string) => `<li>${s}</li>`).join('')}</ul>`;
            }
        }

        addEntry({
            title: `Test Results: ${test.title}`,
            content: content
        });
        setSavedToDiary(true);
        setTimeout(() => setSavedToDiary(false), 2000);

    }, [result, test, addEntry]);

    const handleRetake = () => {
        setAnswers({});
        setCurrentQuestionIndex(0);
        setResult(null);
        setError(null);
        setShowSparks(false);
        setIsAnswered(false);
        setChosenAnswerValue(null);
    };
    
    if (loading) return <LoadingSpinner />;
    if (error) return <p className="text-center text-brand-danger">{error}</p>;
    if (!test) return <p className="text-center">Test not found.</p>;

    if (result) {
        return (
            <>
                {showSparks && <Sparks />}
                <TestResultDisplay 
                    result={result} 
                    test={test} 
                    onCopy={handleCopy} 
                    copied={copied} 
                    onRetake={handleRetake}
                    onSaveToDiary={handleSaveToDiary}
                    savedToDiary={savedToDiary}
                />
            </>
        );
    }

    const currentQuestion = test.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / test.questions.length) * 100; // Start from 0 for a better feel
    const isLikert5 = currentQuestion.options.length === 5;
    const isIQTest = test.id === 'general-iq-test';

    return (
        <div className="max-w-2xl mx-auto">
             <div className="bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                    <p className="text-sm text-brand-text-muted text-center mb-2">Question {currentQuestionIndex + 1} of {test.questions.length}</p>
                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                        <div className="bg-brand-primary h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div key={currentQuestionIndex} className="animate-fade-in">
                    <p className="font-semibold text-xl text-center text-brand-text mb-8 min-h-[6rem] flex items-center justify-center">
                        {currentQuestion.text}
                    </p>
                    <div className={isLikert5 ? "grid grid-cols-1 gap-3" : (isIQTest ? "grid grid-cols-2 gap-4" : "flex justify-center space-x-2 sm:space-x-4")}>
                        {currentQuestion.options.map(opt => {
                             let buttonClass = 'bg-slate-100 hover:bg-slate-200 text-brand-text';
                             if (isAnswered) {
                                 const isCorrect = isIQTest && opt.value === 1;
                                 const isSelected = chosenAnswerValue === opt.value;

                                 if (isIQTest) {
                                     if(isCorrect) buttonClass = 'bg-brand-success text-white scale-105 shadow-lg';
                                     else if(isSelected && !isCorrect) buttonClass = 'bg-brand-danger text-white scale-105 shadow-lg';
                                     else buttonClass = 'bg-slate-100 opacity-50';
                                 } else {
                                     buttonClass = isSelected ? 'bg-brand-primary text-white scale-105 shadow-lg' : 'bg-slate-100 opacity-50';
                                 }
                             }
                            return (
                               <button 
                                 key={opt.text} 
                                 onClick={() => handleAnswerAndAdvance(currentQuestion.id, opt.value)}
                                 disabled={isAnswered}
                                 className={`px-4 py-3 rounded-md font-medium transition-all duration-300 w-full ${buttonClass}`}>
                                   {opt.text}
                               </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestPage;