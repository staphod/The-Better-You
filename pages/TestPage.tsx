import React, { useState, useEffect, useCallback, useRef } from 'react';
// FIX: Using namespace import for react-router-dom to fix module resolution issues.
import * as ReactRouterDom from 'react-router-dom';
import type { FullTest, Question } from '@/types';
import { fetchTestById } from '@/services/api';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { ClipboardIcon, CheckCircleIcon, LightbulbIcon } from '@/components/icons/StatusIcons';
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
                        backgroundColor: 'rgba(74, 144, 226, 0.2)',
                        borderColor: 'rgb(74, 144, 226)',
                        pointBackgroundColor: 'rgb(74, 144, 226)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(74, 144, 226)'
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
                                color: '#E5E7EB'
                            },
                            grid: {
                                color: '#E5E7EB'
                            },
                            pointLabels: {
                                font: {
                                    size: 12,
                                    weight: 'bold'
                                },
                                color: '#333333'
                            },
                            ticks: {
                                backdropColor: '#F8F9FA',
                                color: '#777777',
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
    <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="text-xl font-bold text-brand-primary mb-2">{title}: <span className="text-brand-accent">{level}</span></h3>
        <p className="text-sm text-brand-text-secondary mb-3">{data.explanation}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div>
                <h4 className="font-semibold mb-1">Strengths</h4>
                <ul className="list-disc list-inside space-y-1 text-brand-text-secondary">
                    {data.strengths.map((s: string) => <li key={s}>{s}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-1">Weaknesses</h4>
                <ul className="list-disc list-inside space-y-1 text-brand-text-secondary">
                    {data.weaknesses.map((w: string) => <li key={w}>{w}</li>)}
                </ul>
            </div>
        </div>
    </div>
);


const TestResult: React.FC<{ result: any; test: FullTest; onCopy: () => void; copied: boolean; onRetake: () => void; }> = ({ result, test, onCopy, copied, onRetake }) => {
    const { Link } = ReactRouterDom;
    const isDimensional = !!test.scoringThresholds;

    return (
        <div className="bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
            <h2 className="text-3xl font-bold text-brand-text-primary mb-6 text-center">Your Results</h2>
            
            {isDimensional ? (
                <div className="space-y-6">
                    <p className="text-center text-brand-text-secondary">This chart shows your scores on the five major personality dimensions. The further a point is from the center, the higher you scored on that trait.</p>
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
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <h3 className="font-semibold text-brand-primary mb-2">Strengths</h3>
                        <ul className="list-disc list-inside space-y-1 text-brand-text-secondary">
                            {result.strengths.map((s: string) => <li key={s}>{s}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-brand-primary mb-2">Challenges / Weaknesses</h3>
                        <ul className="list-disc list-inside space-y-1 text-brand-text-secondary">
                            {result.weaknesses.map((w: string) => <li key={w}>{w}</li>)}
                        </ul>
                    </div>
                    {result.strategies && (
                        <div className="md:col-span-2">
                            <h3 className="font-semibold text-brand-primary mb-2">Tailored Strategies</h3>
                            <ul className="list-disc list-inside space-y-1 text-brand-text-secondary">
                                {result.strategies.map((j: string) => <li key={j}>{j}</li>)}
                            </ul>
                        </div>
                    )}
                    {result.best_work && (
                        <div>
                            <h3 className="font-semibold text-brand-primary mb-2">Best Job Fits</h3>
                            <ul className="list-disc list-inside space-y-1 text-brand-text-secondary">
                                {result.best_work.map((p: string) => <li key={p}>{p}</li>)}
                            </ul>
                        </div>
                    )}
                    {result.famous && (
                        <div>
                            <h3 className="font-semibold text-brand-primary mb-2">Famous Examples</h3>
                            <ul className="list-disc list-inside space-y-1 text-brand-text-secondary">
                                {result.famous.map((p: string) => <li key={p}>{p}</li>)}
                            </ul>
                        </div>
                    )}
                </div>
            )}
            
            <div className="mt-8 bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg text-center">
                <div className="flex justify-center items-center gap-2">
                    <LightbulbIcon className="h-6 w-6" />
                    <p className="font-semibold">Want to learn more?</p>
                </div>
                <Link to={`/tests/knowledge-base/${test.id}`} className="text-sm font-medium text-blue-600 hover:underline">
                    Explore all results in the Knowledge Base
                </Link>
            </div>
             <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button onClick={onRetake} className="w-full flex justify-center items-center space-x-2 bg-gray-200 text-brand-text-primary font-bold py-3 px-4 rounded-lg hover:bg-gray-300 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" /></svg>
                    <span>Retake Test</span>
                </button>
                <button onClick={onCopy} className="w-full flex justify-center items-center space-x-2 bg-brand-secondary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50">
                   {copied ? <CheckCircleIcon className="h-5 w-5"/> : <ClipboardIcon className="h-5 w-5" />}
                   <span>{copied ? 'Copied to Clipboard!' : 'Copy Results'}</span>
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

        // --- Dimensional Test (e.g., Big Five) ---
        if (test.scoringThresholds) {
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
                if (scores[trait] <= test.scoringThresholds[trait].low) {
                    levels[trait] = 'Low';
                } else if (scores[trait] >= test.scoringThresholds[trait].high) {
                    levels[trait] = 'High';
                } else {
                    levels[trait] = 'Average';
                }
            }
            setResult({ scores, levels });

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

        if(test.scoringThresholds) {
            textToCopy += Object.keys(result.levels).map(traitKey => {
                 const traitTitle = test.knowledgeBase.resultDetails.find(d => d.key === traitKey)?.title || traitKey;
                 return `${traitTitle}: ${result.levels[traitKey]}`;
            }).join('\n');
        } else {
             textToCopy += `
${result.explanation}
Strengths: ${result.strengths.join(', ')}
Challenges: ${result.weaknesses.join(', ')}
${result.strategies ? `Strategies: ${result.strategies.join(', ')}` : ''}
            `.trim();
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
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!test) return <p className="text-center">Test not found.</p>;

    if (result) {
        return (
            <>
                {showSparks && <Sparks />}
                <TestResult result={result} test={test} onCopy={handleCopy} copied={copied} onRetake={handleRetake} />
            </>
        );
    }

    const currentQuestion = test.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / test.questions.length) * 100;
    const isLikert5 = currentQuestion.options.length === 5;

    return (
        <div className="max-w-2xl mx-auto">
             <div className="bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                    <p className="text-sm text-brand-text-secondary text-center mb-2">Question {currentQuestionIndex + 1} of {test.questions.length}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-brand-primary h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div key={currentQuestionIndex} className="animate-fade-in">
                    <p className="font-semibold text-xl text-center text-brand-text-primary mb-8 min-h-[6rem] flex items-center justify-center">
                        {currentQuestion.text}
                    </p>
                    <div className={isLikert5 ? "grid grid-cols-1 gap-3" : "flex justify-center space-x-2 sm:space-x-4"}>
                        {currentQuestion.options.map(opt => {
                             let buttonClass = 'bg-gray-200 hover:bg-gray-300';
                             if (isAnswered) {
                                 buttonClass = chosenAnswerValue === opt.value ? 'bg-brand-primary text-white scale-105 shadow-lg' : 'bg-gray-200 opacity-50';
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