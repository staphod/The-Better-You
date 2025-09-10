import React, { useState, useCallback, useEffect } from 'react';
// FIX: Using namespace import for react-router-dom to fix module resolution issues.
import * as ReactRouterDom from 'react-router-dom';
import type { Addiction } from '@/types';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { useDiary } from '@/hooks/useDiary';
import { fetchAddictionById } from '@/services/api';
import { ClipboardIcon, CheckCircleIcon, ShieldCheckIcon, LightbulbIcon, LifebuoyIcon } from '@/components/icons/StatusIcons';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"></div>
    </div>
);

const AddictionResult: React.FC<{ 
    result: any; 
    onCopy: () => void; 
    copied: boolean; 
    onRetake: () => void;
    onSaveToDiary: () => void;
    savedToDiary: boolean;
}> = ({ result, onCopy, copied, onRetake, onSaveToDiary, savedToDiary }) => {
    const riskColors: Record<string, string> = {
        "Low Risk": "text-brand-success",
        "Healthy Use": "text-brand-success",
        "Healthy Gaming": "text-brand-success",
        "Healthy Viewing Habits": "text-brand-success",
        "Healthy Work-Life Balance": "text-brand-success",
        "Healthy Relationship Patterns": "text-brand-success",
        "Healthy Curiosity": "text-brand-success",
        "Moderate Risk": "text-brand-accent",
        "At-Risk of Problematic Use": "text-brand-accent",
        "Moderate Dependence": "text-brand-accent",
        "High Risk Behavior": "text-brand-danger",
        "High Risk": "text-brand-danger",
        "High Risk of Compulsive Use": "text-brand-danger",
        "Severe and Immediate Danger": "text-brand-danger",
    };
    
    return (
        <div className="bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
            <h2 className="text-2xl font-bold text-brand-text mb-4 text-center">Your Self-Assessment Results</h2>
            
            <div className="text-center mb-6 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <ShieldCheckIcon className={`h-12 w-12 mx-auto mb-2 ${riskColors[result.level] || 'text-brand-text'}`} />
                <h3 className={`text-xl font-bold ${riskColors[result.level] || 'text-brand-text'}`}>{result.level}</h3>
            </div>

            <p className="text-brand-text-muted mb-6">{result.explanation}</p>
            
            <div className="space-y-6">
                <div>
                    <h4 className="font-semibold text-brand-primary mb-2 flex items-center gap-2"><LightbulbIcon className="h-5 w-5"/> Practical Advice</h4>
                    <ul className="list-disc list-inside space-y-2 text-brand-text-muted pl-2">
                        {result.advice.map((item: string, index: number) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-brand-primary mb-2 flex items-center gap-2"><LifebuoyIcon className="h-5 w-5"/> Helplines & Resources</h4>
                    <ul className="space-y-2 text-brand-text-muted pl-2">
                        {result.helplines.map((item: any, index: number) => (
                            <li key={index} className="list-disc list-inside">
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-brand-info hover:underline font-semibold">{item.name}</a>
                                {item.number && <span className="ml-2 text-sm">{item.number}</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
             <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
               <button onClick={onRetake} className="w-full flex justify-center items-center space-x-2 bg-slate-200 text-brand-text font-bold py-3 px-4 rounded-lg hover:bg-slate-300 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                   <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                 </svg>
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

const AddictionDetailPage: React.FC = () => {
    const { useParams, useNavigate, Link } = ReactRouterDom;
    const { addictionId } = useParams<{ addictionId: string }>();
    const navigate = useNavigate();
    const { isOnline } = useOnlineStatus();
    const { addEntry } = useDiary();

    const [addiction, setAddiction] = useState<Addiction | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [quizState, setQuizState] = useState<'idle' | 'in-progress' | 'completed'>('idle');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [result, setResult] = useState<any | null>(null);
    const [copied, setCopied] = useState(false);
    const [savedToDiary, setSavedToDiary] = useState(false);
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

     const handleSaveToDiary = useCallback(() => {
        if (!result || !addiction) return;
        
        const content = `<h3>${result.level}</h3><p>${result.explanation}</p><h4>Advice</h4><ul>${result.advice.map((a: string) => `<li>${a}</li>`).join('')}</ul>`;

        addEntry({
            title: `Assessment Results: ${addiction.title}`,
            content: content
        });
        setSavedToDiary(true);
        setTimeout(() => setSavedToDiary(false), 2000);

    }, [result, addiction, addEntry]);
    
    const handleRetake = () => {
        setAnswers({});
        setCurrentQuestionIndex(0);
        setResult(null);
        setQuizState('idle');
        setIsAnswered(false);
        setChosenAnswerValue(null);
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <p className="text-center text-brand-danger">{error}</p>;
    
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
        return <AddictionResult result={result} onCopy={handleCopy} copied={copied} onRetake={handleRetake} onSaveToDiary={handleSaveToDiary} savedToDiary={savedToDiary}/>;
    }

    if (quizState === 'in-progress') {
        const currentQuestion = addiction.questions[currentQuestionIndex];
        const progress = ((currentQuestionIndex) / addiction.questions.length) * 100;

        return (
             <div className="max-w-3xl mx-auto">
                <div className="bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <p className="text-sm text-brand-text-muted text-center mb-2">Question {currentQuestionIndex + 1} of {addiction.questions.length}</p>
                        <div className="w-full bg-slate-200 rounded-full h-2.5">
                            <div className="bg-brand-primary h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>

                    <div key={currentQuestionIndex} className="animate-fade-in">
                        <p className="font-semibold text-xl text-center text-brand-text mb-8 min-h-[6rem] flex items-center justify-center">
                            {currentQuestion.text}
                        </p>
                        <div className="space-y-3">
                            {currentQuestion.options.map(opt => {
                                let buttonClass = 'bg-slate-100 hover:bg-slate-200';
                                if (isAnswered) {
                                    buttonClass = chosenAnswerValue === opt.value ? 'bg-brand-primary text-white scale-105' : 'bg-slate-100 opacity-50';
                                }

                                return (
                                   <button 
                                     key={opt.value} 
                                     onClick={() => handleAnswerAndAdvance(currentQuestion.id, opt.value)}
                                     disabled={isAnswered}
                                     className={`px-5 py-3 rounded-lg font-medium transition-all duration-300 w-full text-left text-brand-text ${buttonClass}`}
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
            <h1 className="text-3xl font-bold text-center mb-2 text-brand-text">{addiction.title}</h1>
            <p className="text-center text-brand-text-muted mb-6">{addiction.description}</p>

            <div className="my-8 p-4 bg-brand-info/10 border-l-4 border-brand-info">
                <h3 className="font-semibold text-brand-info flex items-center gap-2">
                    <ShieldCheckIcon className="h-5 w-5"/>
                    Common Risk Factors
                </h3>
                <ul className="list-disc list-inside mt-2 text-sm text-brand-text-muted space-y-1">
                    {addiction.riskFactors.map((factor, index) => <li key={index}>{factor}</li>)}
                </ul>
            </div>
            
            <button 
              onClick={() => setQuizState('in-progress')}
              className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-primary/90 transition-transform transform hover:scale-105">
                Start Self-Assessment
            </button>
             <p className="text-xs text-center text-brand-text-muted mt-4">This is a screening tool, not a diagnosis. Please consult a healthcare professional for a formal assessment.</p>
        </div>
    );
};

export default AddictionDetailPage;