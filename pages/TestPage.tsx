import React, { useState, useEffect, useCallback } from 'react';
// FIX: Using named imports for react-router-dom to fix module resolution issues.
import { useParams, useNavigate } from 'react-router-dom';
import type { FullTest, Question } from '@/types';
import { fetchTestById } from '@/services/api';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { useTestHistory } from '@/hooks/useTestHistory';
import Sparks from '@/components/Sparks';
import TestResultDisplay from '@/components/TestResultDisplay';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"></div>
    </div>
);

const TestPage: React.FC = () => {
    const { testId } = useParams<{ testId: string }>();
    const navigate = useNavigate();
    const { isOnline } = useOnlineStatus();
    const { addHistoryItem } = useTestHistory();

    const [test, setTest] = useState<FullTest | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [result, setResult] = useState<any | null>(null);
    const [copied, setCopied] = useState(false);
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

        // --- 16 Personality Types Test ---
        if (test.id === '16-personality-types') {
            const scores: { [key: string]: number } = { mind: 0, energy: 0, nature: 0, tactics: 0, identity: 0 };
            test.questions.forEach(q => {
                if (q.category && finalAnswers[q.id] !== undefined) {
                    const value = finalAnswers[q.id];
                    const score = q.reverse ? -value : value;
                    scores[q.category] += score;
                }
            });

            const mind = scores.mind >= 0 ? 'E' : 'I';
            const energy = scores.energy >= 0 ? 'N' : 'S';
            const nature = scores.nature >= 0 ? 'T' : 'F';
            const tactics = scores.tactics >= 0 ? 'J' : 'P';
            const identity = scores.identity >= 0 ? 'A' : 'T';
            
            const finalTypeCode = `${mind}${energy}${nature}${tactics}`;
            const identityText = test.result_template[identity].explanation;
            
            const baseResult = test.result_template[finalTypeCode] || test.result_template["DEFAULT"];
            
            finalResult = {
                ...baseResult,
                level: `${finalTypeCode}-${identity}`,
                explanation: `${baseResult.explanation}\n\nAs a(n) ${finalTypeCode}-${identity}, you are ${identity === 'A' ? 'Assertive' : 'Turbulent'}. ${identityText}`
            };
            finalSummary = `Result: ${finalTypeCode}-${identity}`;
        
        // --- Dimensional Test (e.g., Big Five) ---
        } else if (thresholds && 'O' in thresholds) {
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

        // --- Single Score with Levels (e.g., Anxiety, Imposter Syndrome) ---
        } else if (thresholds && !('O' in thresholds)) {
             const totalScore = Object.values(finalAnswers).reduce((sum, val) => sum + val, 0);
             const resultLevels = test.knowledgeBase.resultDetails;
             
             let determinedResultKey = resultLevels[resultLevels.length - 1].key;

             for (const level of resultLevels) {
                 const minScore = (thresholds as Record<string, number>)[level.key];
                 if (minScore !== undefined && totalScore >= minScore) {
                     determinedResultKey = level.key;
                     break; 
                 }
             }
             finalResult = test.result_template[determinedResultKey];
             if (!finalResult) {
                setError("Could not determine a result from the score.");
                return;
             }
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
            
            if (resultKey) {
                finalResult = test.result_template[resultKey];
                if (!finalResult) {
                    setError("Could not determine a result from the category scores.");
                    return;
                }
                finalSummary = `Result: ${finalResult.level || 'Completed'}`;
            } else {
                setError("Could not determine a result category.");
                return;
            }
        
        // --- Simple Score Test (e.g., MBTI Architect) ---
        } else {
            const totalScore = Object.values(finalAnswers).reduce((sum, val) => sum + val, 0);
            const resultKey = totalScore >= 0 ? "high-score" : "low-score";
            finalResult = test.result_template[resultKey];
            if (!finalResult) {
                setError("Could not determine a result for the final score.");
                return;
            }
            finalSummary = "Completed";
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
                />
            </>
        );
    }

    const currentQuestion = test.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / test.questions.length) * 100; // Start from 0 for a better feel
    const isLikert5 = currentQuestion.options.length === 5;
    const isLikert7 = currentQuestion.options.length === 7;

    return (
        <div className="max-w-3xl mx-auto">
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
                    <div className={isLikert7 ? "grid grid-cols-1 gap-2" : (isLikert5 ? "grid grid-cols-1 gap-3" : "flex justify-center space-x-2 sm:space-x-4")}>
                        {currentQuestion.options.map(opt => {
                             let buttonClass = 'bg-slate-100 hover:bg-slate-200 text-brand-text';
                             if (isAnswered) {
                                buttonClass = chosenAnswerValue === opt.value ? 'bg-brand-primary text-white scale-105 shadow-lg' : 'bg-slate-100 opacity-50';
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