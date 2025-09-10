import React, { useState, useCallback, useEffect } from 'react';
// FIX: Using namespace import for react-router-dom to fix module resolution issues.
import * as ReactRouterDom from 'react-router-dom';
import type { Addiction } from '@/types';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { fetchAddictionById } from '@/services/api';
import { ClipboardIcon, CheckCircleIcon, ShieldCheckIcon, LightbulbIcon, LifebuoyIcon } from '@/components/icons/StatusIcons';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"></div>
    </div>
);

const AddictionResult: React.FC<{ result: any; onCopy: () => void; copied: boolean; onRetake: () => void; }> = ({ result, onCopy, copied, onRetake }) => {
    const riskColors: Record<string, string> = {
        "Low Risk": "text-green-600",
        "Healthy Use": "text-green-600",
        "Healthy Gaming": "text-green-600",
        "Healthy Viewing Habits": "text-green-600",
        "Healthy Work-Life Balance": "text-green-600",
        "Healthy Relationship Patterns": "text-green-600",
        "Healthy Curiosity": "text-green-600",
        "Moderate Risk": "text-yellow-600",
        "At-Risk of Problematic Use": "text-yellow-600",
        "Moderate Dependence": "text-yellow-600",
        "High Risk Behavior": "text-red-600",
        "High Risk": "text-red-600",
        "High Risk of Compulsive Use": "text-red-600",
        "Severe and Immediate Danger": "text-red-600",
    };
    
    return (
        <div className="bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
            <h2 className="text-2xl font-bold text-brand-text-primary mb-4 text-center">Your Self-Assessment Results</h2>
            
            <div className="text-center mb-6 p-4 rounded-lg bg-gray-50">
                <ShieldCheckIcon className={`h-12 w-12 mx-auto mb-2 ${riskColors[result.level] || 'text-gray-600'}`} />
                <h3 className={`text-xl font-bold ${riskColors[result.level] || 'text-gray-800'}`}>{result.level}</h3>
            </div>

            <p className="text-brand-text-secondary mb-6">{result.explanation}</p>
            
            <div className="space-y-6">
                <div>
                    <h4 className="font-semibold text-brand-primary mb-2 flex items-center gap-2"><LightbulbIcon className="h-5 w-5"/> Practical Advice</h4>
                    <ul className="list-disc list-inside space-y-2 text-brand-text-secondary pl-2">
                        {result.advice.map((item: string, index: number) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-brand-primary mb-2 flex items-center gap-2"><LifebuoyIcon className="h-5 w-5"/> Helplines & Resources</h4>
                    <ul className="space-y-2 text-brand-text-secondary pl-2">
                        {result.helplines.map((item: any, index: number) => (
                            <li key={index} className="list-disc list-inside">
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">{item.name}</a>
                                {item.number && <span className="ml-2 text-sm">{item.number}</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
             <div className="mt-8 flex flex-col sm:flex-row gap-4">
               <button onClick={onRetake} className="w-full flex justify-center items-center space-x-2 bg-gray-200 text-brand-text-primary font-bold py-3 px-4 rounded-lg hover:bg-gray-300 transition-opacity">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                   <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                 </svg>
                 <span>Retake Assessment</span>
                </button>
                <button onClick={onCopy} className="w-full flex justify-center items-center space-x-2 bg-brand-secondary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50">
                   {copied ? <CheckCircleIcon className="h-5 w-5"/> : <ClipboardIcon className="h-5 w-5" />}
                   <span>{copied ? 'Copied to Clipboard!' : 'Copy Results'}</span>
                </button>
            </div>
        </div>
    );
};

const AddictionDetailPage: React.FC = () => {
    const { useParams, useNavigate, Link } = ReactRouterDom;
    const { addictionId } = useParams<{ addictionId: string }>();
    const navigate = useNavigate();
    const { isOnline } = useOnlineStatus();

    const [addiction, setAddiction] = useState<Addiction | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [quizState, setQuizState] = useState<'idle' | 'in-progress' | 'completed'>('idle');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [result, setResult] = useState<any | null>(null);
    const [copied, setCopied] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [chosenAnswerValue, setChosenAnswerValue] = useState<number | null>(null);

    useEffect(() => {
        if (!addictionId) return;

        if (!isOnline) {
            navigate('/offline');
            return;
        }

        const loadAddiction = async () => {
            try {
                setLoading(true);
                const addictionData = await fetchAddictionById(addictionId);
                setAddiction(addictionData);
                setError(null);
            } catch (err) {
                setError('Failed to load the assessment. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        loadAddiction();
    }, [addictionId, isOnline, navigate]);
    
    const handleAnswerAndAdvance = (questionId: string, value: number) => {
        if (isAnswered) return;

        setChosenAnswerValue(value);
        setIsAnswered(true);

        const newAnswers = { ...answers, [questionId]: value };
        setAnswers(newAnswers);

        setTimeout(() => {
            const isLastQuestion = currentQuestionIndex === addiction!.questions.length - 1;

            if (isLastQuestion) {
                const totalScore = Object.values(newAnswers).reduce((sum, val) => sum + val, 0);
                
                let resultKey = 'low-risk';
                if (totalScore >= addiction!.scoringThresholds.high) {
                    resultKey = 'high-risk';
                } else if (totalScore >= addiction!.scoringThresholds.moderate) {
                    resultKey = 'moderate-risk';
                }
                
                setResult(addiction!.resultTemplate[resultKey]);
                setQuizState('completed');
            } else {
                setCurrentQuestionIndex(prev => prev + 1);
                setIsAnswered(false);
                setChosenAnswerValue(null);
            }
        }, 500);
    };

    const handleCopy = useCallback(() => {
        if (!result || !addiction) return;
        const textToCopy = `
My ${addiction.title} Results:
---
Risk Level: ${result.level}
Explanation: ${result.explanation}
Advice: ${result.advice.join('; ')}
Resources: ${result.helplines.map((h: any) => `${h.name} (${h.url})`).join(', ')}
        `.trim();

        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }, [result, addiction]);
    
    const handleRetake = () => {
        setAnswers({});
        setCurrentQuestionIndex(0);
        setResult(null);
        setQuizState('idle');
        setIsAnswered(false);
        setChosenAnswerValue(null);
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    
    if (!addiction) {
        return (
            <div className="text-center">
                <h1 className="text-2xl font-bold">Assessment Not Found</h1>
                <p className="mt-2">The assessment you're looking for doesn't exist.</p>
                <Link to="/addictions" className="mt-4 inline-block bg-brand-primary text-white font-bold py-2 px-4 rounded-lg">
                    Back to Assessments
                </Link>
            </div>
        );
    }
    
    if (quizState === 'completed' && result) {
        return <AddictionResult result={result} onCopy={handleCopy} copied={copied} onRetake={handleRetake} />;
    }

    if (quizState === 'in-progress') {
        const currentQuestion = addiction.questions[currentQuestionIndex];
        const progress = ((currentQuestionIndex + 1) / addiction.questions.length) * 100;

        return (
             <div className="max-w-3xl mx-auto">
                <div className="bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <p className="text-sm text-brand-text-secondary text-center mb-2">Question {currentQuestionIndex + 1} of {addiction.questions.length}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-brand-primary h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>

                    <div key={currentQuestionIndex} className="animate-fade-in">
                        <p className="font-semibold text-xl text-center text-brand-text-primary mb-8 min-h-[6rem] flex items-center justify-center">
                            {currentQuestion.text}
                        </p>
                        <div className="space-y-3">
                            {currentQuestion.options.map(opt => {
                                let buttonClass = 'bg-gray-200 hover:bg-gray-300';
                                if (isAnswered) {
                                    buttonClass = chosenAnswerValue === opt.value ? 'bg-brand-primary text-white scale-105' : 'bg-gray-200 opacity-50';
                                }

                                return (
                                   <button 
                                     key={opt.value} 
                                     onClick={() => handleAnswerAndAdvance(currentQuestion.id, opt.value)}
                                     disabled={isAnswered}
                                     className={`px-5 py-3 rounded-lg font-medium transition-all duration-300 w-full text-left text-brand-text-primary ${buttonClass}`}
                                   >
                                       {opt.text}
                                   </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
             </div>
        );
    }

    // Default to 'idle' state
    return (
        <div className="max-w-3xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
            <h1 className="text-3xl font-bold text-center mb-2 text-brand-text-primary">{addiction.title}</h1>
            <p className="text-center text-brand-text-secondary mb-6">{addiction.description}</p>

            <div className="my-8 p-4 bg-blue-50 border-l-4 border-blue-400">
                <h3 className="font-semibold text-blue-800 flex items-center gap-2">
                    <ShieldCheckIcon className="h-5 w-5"/>
                    Common Risk Factors
                </h3>
                <ul className="list-disc list-inside mt-2 text-sm text-blue-700 space-y-1">
                    {addiction.riskFactors.map((factor, index) => <li key={index}>{factor}</li>)}
                </ul>
            </div>
            
            <button 
              onClick={() => setQuizState('in-progress')}
              className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-transform transform hover:scale-105">
                Start Self-Assessment
            </button>
             <p className="text-xs text-center text-gray-500 mt-4">This is a screening tool, not a diagnosis. Please consult a healthcare professional for a formal assessment.</p>
        </div>
    );
};

export default AddictionDetailPage;
