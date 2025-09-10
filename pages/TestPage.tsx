import React, { useState, useEffect, useCallback, useRef } from 'react';
// FIX: Using namespace import for react-router-dom to fix module resolution issues.
import * as ReactRouterDom from 'react-router-dom';
import type { FullTest, Question } from '@/types';
import { fetchTestById } from '@/services/api';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { useDiary } from '@/hooks/useDiary';
import { ClipboardIcon, CheckCircleIcon, LightbulbIcon, ShieldCheckIcon } from '@/components/icons/StatusIcons';
import Sparks from '@/components/Sparks';

// Let TypeScript know that 'Chart' is a global variable from the imported CDN script
declare var Chart: any;

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"></div>
    </div>
);

const RadarChart: React.FC<{ scores: Record<string, number> }> = ({ scores }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<any>(null);

    useEffect(() => {
        if (typeof Chart === 'undefined') return;
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            const labels = ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'];
            const data = [scores.O, scores.C, scores.E, scores.A, scores.N];

            chartInstance.current = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Your Score',
                        data: data,
                        fill: true,
                        backgroundColor: 'rgba(71, 85, 105, 0.2)',
                        borderColor: '#475569',
                        pointBackgroundColor: '#475569',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: '#475569'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    },
                    scales: {
                        r: {
                            angleLines: {
                                color: '#E2E8F0'
                            },
                            grid: {
                                color: '#E2E8F0'
                            },
                            pointLabels: {
                                font: {
                                    size: 12,
                                    weight: 'bold'
                                },
                                color: '#1E293B'
                            },
                            ticks: {
                                backdropColor: '#F8FAFC',
                                color: '#64748B',
                            },
                            min: 0,
                            max: 96, // 24 questions * 4 max points
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [scores]);

    return <div className="h-64 sm:h-96"><canvas ref={chartRef}></canvas></div>;
};

const TraitResultCard: React.FC<{ title: string; level: string; data: any }> = ({ title, level, data }) => (
    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h3 className="text-xl font-bold text-brand-primary mb-2">{title}: <span className="text-brand-accent">{level}</span></h3>
        <p className="text-sm text-brand-text-muted mb-3">{data.explanation}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div>
                <h4 className="font-semibold mb-1 text-brand-text">Strengths</h4>
                <ul className="list-disc list-inside space-y-1 text-brand-text-muted">
                    {data.strengths.map((s: string) => <li key={s}>{s}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-1 text-brand-text">Weaknesses</h4>
                <ul className="list-disc list-inside space-y-1 text-brand-text-muted">
                    {data.weaknesses.map((w: string) => <li key={w}>{w}</li>)}
                </ul>
            </div>
        </div>
    </div>
);


const TestResult: React.FC<{ 
    result: any; 
    test: FullTest; 
    onCopy: () => void; 
    copied: boolean; 
    onRetake: () => void;
    onSaveToDiary: () => void;
    savedToDiary: boolean;
}> = ({ result, test, onCopy, copied, onRetake, onSaveToDiary, savedToDiary }) => {
    const { Link } = ReactRouterDom;
    const isDimensional = test.scoringThresholds && 'O' in test.scoringThresholds;

    const riskColors: Record<string, string> = {
        "Low Anxiety": "text-brand-success",
        "Moderate Anxiety": "text-brand-accent",
        "High Anxiety": "text-brand-danger",
    };

    return (
        <div className="bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
            <h2 className="text-3xl font-bold text-brand-text text-center">Your Results</h2>
            
            {isDimensional && result.scores ? (
                <div className="space-y-6">
                    <p className="text-center text-brand-text-muted mt-4">This chart shows your scores on the five major personality dimensions. The further a point is from the center, the higher you scored on that trait.</p>
                    <RadarChart scores={result.scores} />
                    <div className="space-y-4">
                       <TraitResultCard title="Openness" level={result.levels.O} data={test.result_template[`O_${result.levels.O.toLowerCase()}`]} />
                       <TraitResultCard title="Conscientiousness" level={result.levels.C} data={test.result_template[`C_${result.levels.C.toLowerCase()}`]} />
                       <TraitResultCard title="Extraversion" level={result.levels.E} data={test.result_template[`E_${result.levels.E.toLowerCase()}`]} />
                       <TraitResultCard title="Agreeableness" level={result.levels.A} data={test.result_template[`A_${result.levels.A.toLowerCase()}`]} />
                       <TraitResultCard title="Neuroticism" level={result.levels.N} data={test.result_template[`N_${result.levels.N.toLowerCase()}`]} />
                    </div>
                </div>
            ) : (
                 <div className="space-y-6 mt-4">
                    {result.level && (
                        <div className="text-center mb-6 p-4 rounded-lg bg-slate-50 border border-slate-200">
                            <ShieldCheckIcon className={`h-12 w-12 mx-auto mb-2 ${riskColors[result.level] || 'text-brand-text'}`} />
                            <h3 className={`text-xl font-bold ${riskColors[result.level] || 'text-brand-text'}`}>{result.level}</h3>
                        </div>
                    )}
                    
                    <p className="text-brand-text-muted text-center">{result.explanation}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {result.strengths && (
                            <div>
                                <h3 className="font-semibold text-brand-primary mb-2">Strengths</h3>
                                <ul className="list-disc list-inside space-y-1 text-brand-text-muted">
                                    {result.strengths.map((s: string) => <li key={s}>{s}</li>)}
                                </ul>
                            </div>
                        )}
                        {result.weaknesses && (
                             <div>
                                <h3 className="font-semibold text-brand-primary mb-2">Challenges / Weaknesses</h3>
                                <ul className="list-disc list-inside space-y-1 text-brand-text-muted">
                                    {result.weaknesses.map((w: string) => <li key={w}>{w}</li>)}
                                </ul>
                            </div>
                        )}
                         {result.best_work && (
                            <div>
                                <h3 className="font-semibold text-brand-primary mb-2">Best Job Fits</h3>
                                <ul className="list-disc list-inside space-y-1 text-brand-text-muted">
                                    {result.best_work.map((p: string) => <li key={p}>{p}</li>)}
                                </ul>
                            </div>
                        )}
                        {result.famous && (
                            <div>
                                <h3 className="font-semibold text-brand-primary mb-2">Famous Examples</h3>
                                <ul className="list-disc list-inside space-y-1 text-brand-text-muted">
                                    {result.famous.map((p: string) => <li key={p}>{p}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                    
                    {result.strategies && (
                        <div className="md:col-span-2">
                            <h3 className="font-semibold text-brand-primary mb-2">Tailored Strategies</h3>
                            <ul className="list-disc list-inside space-y-1 text-brand-text-muted">
                                {result.strategies.map((j: string) => <li key={j}>{j}</li>)}
                            </ul>
                        </div>
                    )}

                    {result.advice && (
                         <div className="md:col-span-2">
                            <h3 className="font-semibold text-brand-primary mb-2">Practical Advice</h3>
                            <ul className="list-disc list-inside space-y-1 text-brand-text-muted">
                                {result.advice.map((j: string) => <li key={j}>{j}</li>)}
                            </ul>
                        </div>
                    )}
                </div>
            )}
            
            <div className="mt-8 bg-brand-info/10 border border-brand-info/20 text-brand-info px-4 py-3 rounded-lg text-center">
                <div className="flex justify-center items-center gap-2">
                    <LightbulbIcon className="h-6 w-6" />
                    <p className="font-semibold">Want to learn more?</p>
                </div>
                <Link to={`/tests/knowledge-base/${test.id}`} className="text-sm font-medium text-brand-info hover:underline">
                    Explore all results in the Knowledge Base
                </Link>
            </div>
             <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button onClick={onRetake} className="w-full flex justify-center items-center space-x-2 bg-slate-200 text-brand-text font-bold py-3 px-4 rounded-lg hover:bg-slate-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" /></svg>
                    <span>Retake</span>
                </button>
                <button onClick={onCopy} className="w-full flex justify-center items-center space-x-2 bg-brand-surface border border-slate-300 text-brand-text font-bold py-3 px-4 rounded-lg hover:bg-slate-100 transition-colors">
                   {copied ? <CheckCircleIcon className="h-5 w-5 text-brand-success"/> : <ClipboardIcon className="h-5 w-5" />}
                   <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
                 <button onClick={onSaveToDiary} className="w-full flex justify-center items-center space-x-2 bg-brand-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-primary/90 transition-opacity disabled:opacity-50">
                   {savedToDiary ? <CheckCircleIcon className="h-5 w-5"/> : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" /></svg>}
                   <span>{savedToDiary ? 'Saved!' : 'Save to Diary'}</span>
                </button>
            </div>
        </div>
    );
};

const TestPage: React.FC = () => {
    const { useParams, useNavigate } = ReactRouterDom;
    const { testId } = useParams<{ testId: string }>();
    const navigate = useNavigate();
    const { isOnline } = useOnlineStatus();
    const { addEntry } = useDiary();

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
            setResult({ scores, levels });

        // --- Single Score with Levels (e.g., Anxiety Test) ---
        } else if (thresholds && 'moderate' in thresholds) {
             const totalScore = Object.values(finalAnswers).reduce((sum, val) => sum + val, 0);
             let resultKey = 'low-anxiety';
             if (totalScore >= (thresholds as { high: number }).high) {
                resultKey = 'high-anxiety';
             } else if (totalScore >= (thresholds as { moderate: number }).moderate) {
                resultKey = 'moderate-anxiety';
             }
             setResult(test.result_template[resultKey]);

        // --- Archetype Test (e.g., Procrastination) ---
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
                setResult(test.result_template[resultKey]);
            } else {
                setError("Could not determine a result.");
            }
        
        // --- Simple Score Test (e.g., MBTI) ---
        } else {
            const totalScore = Object.values(finalAnswers).reduce((sum, val) => sum + val, 0);
            const resultKey = totalScore >= 0 ? "high-score" : "low-score";
            setResult(test.result_template[resultKey]);
        }
        setShowSparks(true);
    }, [test]);

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
                <TestResult 
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
                    <div className={isLikert5 ? "grid grid-cols-1 gap-3" : "flex justify-center space-x-2 sm:space-x-4"}>
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