import React, { useRef, useEffect } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import type { FullTest } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import { ClipboardIcon, CheckCircleIcon, LightbulbIcon, ShieldCheckIcon } from '@/components/icons/StatusIcons';

// Let TypeScript know that 'Chart' is a global variable from the imported CDN script
declare var Chart: any;

const RadarChart: React.FC<{ scores: Record<string, number> }> = ({ scores }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<any>(null);
    const { mode } = useTheme();

    useEffect(() => {
        if (typeof Chart === 'undefined') return;
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        if (chartRef.current) {
            const isDark = mode === 'dark';
            const gridColor = isDark ? 'rgba(51, 65, 85, 0.5)' : 'rgba(226, 232, 240, 0.8)';
            const pointLabelColor = isDark ? '#E2E8F0' : '#1E293B';
            const ticksColor = isDark ? '#94A3B8' : '#64748B';
            const ticksBackdropColor = isDark ? '#0F172A' : '#F8FAFC';
            const primaryColor = isDark ? '#CBD5E1' : '#475569';
            const primaryColorBg = isDark ? 'rgba(203, 213, 225, 0.2)' : 'rgba(71, 85, 105, 0.2)';


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
                        backgroundColor: primaryColorBg,
                        borderColor: primaryColor,
                        pointBackgroundColor: primaryColor,
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: primaryColor,
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
                                color: gridColor
                            },
                            grid: {
                                color: gridColor
                            },
                            pointLabels: {
                                font: {
                                    size: 12,
                                    weight: 'bold'
                                },
                                color: pointLabelColor
                            },
                            ticks: {
                                backdropColor: ticksBackdropColor,
                                color: ticksColor,
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
    }, [scores, mode]);

    return <div className="h-64 sm:h-96"><canvas ref={chartRef}></canvas></div>;
};

const TraitResultCard: React.FC<{ title: string; level: string; data: any }> = ({ title, level, data }) => {
    const { Link } = ReactRouterDom;
    return (
        <div className="bg-brand-bg p-4 rounded-lg border border-brand-border">
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
            {data.nextSteps && (
                <div className="mt-4 pt-3 border-t border-brand-border">
                    <h4 className="font-semibold text-brand-text mb-2">What's Next?</h4>
                    <div className="space-y-2">
                        {data.nextSteps.map((step: {text: string, link: string}) => (
                            <Link key={step.link} to={step.link} className="block text-sm text-brand-info hover:underline">
                                &rarr; {step.text}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const TestResultDisplay: React.FC<{ 
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
        "Low Overthinking": "text-brand-success",
        "Moderate Overthinking": "text-brand-accent",
        "High Overthinking": "text-brand-danger",
        "Low Stress": "text-brand-success",
        "Moderate Stress": "text-brand-accent",
        "High Stress": "text-brand-danger",
        "Low Risk of Burnout": "text-brand-success",
        "Moderate Risk of Burnout": "text-brand-accent",
        "High Risk of Burnout": "text-brand-danger",
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
                        <div className="text-center mb-6 p-4 rounded-lg bg-brand-bg border border-brand-border">
                            <ShieldCheckIcon className={`h-12 w-12 mx-auto mb-2 ${riskColors[result.level] || 'text-brand-text'}`} />
                            <h3 className={`text-xl font-bold ${riskColors[result.level] || 'text-brand-text'}`}>{result.level}</h3>
                        </div>
                    )}
                    
                    <p className="text-brand-text-muted text-center">{result.explanation}</p>
                    
                     {result.basic_fear && result.basic_desire && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                            <div className="bg-red-500/10 p-3 rounded-lg">
                                <h4 className="font-semibold text-brand-danger">Basic Fear</h4>
                                <p className="text-sm text-brand-text-muted">{result.basic_fear}</p>
                            </div>
                            <div className="bg-emerald-500/10 p-3 rounded-lg">
                                <h4 className="font-semibold text-brand-success">Basic Desire</h4>
                                <p className="text-sm text-brand-text-muted">{result.basic_desire}</p>
                            </div>
                        </div>
                    )}

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

                    {result.nextSteps && (
                        <div className="pt-6 border-t border-brand-border">
                           <h3 className="font-semibold text-brand-primary mb-3 text-lg">What's Next?</h3>
                           <div className="space-y-3">
                                {result.nextSteps.map((step: { text: string; link: string }) => (
                                    <Link key={step.link} to={step.link} className="block group p-3 bg-brand-bg rounded-md hover:bg-brand-bg/80 transition-colors">
                                        <p className="font-semibold text-brand-info group-hover:underline">&rarr; {step.text}</p>
                                    </Link>
                                ))}
                           </div>
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
                <button onClick={onRetake} className="w-full flex justify-center items-center space-x-2 bg-brand-bg border border-brand-border text-brand-text font-bold py-3 px-4 rounded-lg hover:brightness-95 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" /></svg>
                    <span>Retake</span>
                </button>
                <button onClick={onCopy} className="w-full flex justify-center items-center space-x-2 bg-brand-surface border border-brand-border text-brand-text font-bold py-3 px-4 rounded-lg hover:bg-brand-bg transition-colors">
                   {copied ? <CheckCircleIcon className="h-5 w-5 text-brand-success"/> : <ClipboardIcon className="h-5 w-5" />}
                   <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
                 <button onClick={onSaveToDiary} className="w-full flex justify-center items-center space-x-2 bg-brand-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-opacity disabled:opacity-50">
                   {savedToDiary ? <CheckCircleIcon className="h-5 w-5"/> : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" /></svg>}
                   <span>{savedToDiary ? 'Saved!' : 'Save to Diary'}</span>
                </button>
            </div>
        </div>
    );
};

export default TestResultDisplay;