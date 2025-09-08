import React, { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import type { Addiction } from '@/types';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { fetchAddictionById } from '@/services/api';
import { ClipboardIcon, CheckCircleIcon, ShieldCheckIcon, LightbulbIcon, LifebuoyIcon } from '@/components/icons/StatusIcons';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"></div>
    </div>
);

const AddictionResult: React.FC<{ result: any; onCopy: () => void; copied: boolean }> = ({ result, onCopy, copied }) => {
    const riskColors: Record<string, string> = {
        "Low Risk": "text-green-600",
        "Healthy Use": "text-green-600",
        "Moderate Risk": "text-yellow-600",
        "At-Risk of Problematic Use": "text-yellow-600",
        "High Risk": "text-red-600",
        "High Risk of Compulsive Use": "text-red-600",
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
            
            <button onClick={onCopy} className="mt-8 w-full flex justify-center items-center space-x-2 bg-brand-secondary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50">
               {copied ? <CheckCircleIcon className="h-5 w-5"/> : <ClipboardIcon className="h-5 w-5" />}
               <span>{copied ? 'Copied to Clipboard!' : 'Copy Results'}</span>
            </button>
        </div>
    );
};

const AddictionDetailPage: React.FC = () => {
    const { addictionId } = useParams<{ addictionId: string }>();
    const navigate = useNavigate();
    const { isOnline } = useOnlineStatus();

    const [addiction, setAddiction] = useState<Addiction | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [result, setResult] = useState<any | null>(null);
    const [copied, setCopied] = useState(false);

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
    
    const handleAnswerChange = (questionId: string, value: number) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleSubmit = () => {
        if (!addiction) return;
        const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
        
        let resultKey = 'low-risk';
        if (totalScore >= addiction.scoringThresholds.high) {
            resultKey = 'high-risk';
        } else if (totalScore >= addiction.scoringThresholds.moderate) {
            resultKey = 'moderate-risk';
        }
        
        setResult(addiction.resultTemplate[resultKey]);
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
    
    if (result) {
        return <AddictionResult result={result} onCopy={handleCopy} copied={copied} />;
    }

    const allQuestionsAnswered = addiction.questions.length === Object.keys(answers).length;

    return (
        <div className="max-w-3xl mx-auto">
            <div className="bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-2 text-brand-text-primary">{addiction.title}</h1>
                <p className="text-center text-brand-text-secondary mb-6">{addiction.description}</p>

                <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-400">
                    <h3 className="font-semibold text-blue-800">Common Risk Factors</h3>
                    <ul className="list-disc list-inside mt-2 text-sm text-blue-700">
                        {addiction.riskFactors.map((factor, index) => <li key={index}>{factor}</li>)}
                    </ul>
                </div>
                
                <h2 className="text-xl font-bold text-center mb-6 text-brand-text-primary">Questionnaire</h2>
                <div className="space-y-6">
                    {addiction.questions.map((q, index) => (
                        <div key={q.id}>
                            <p className="font-semibold mb-2">
                                {index + 1}. {q.text}
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                                {q.options.map(opt => (
                                   <button 
                                     key={opt.value} 
                                     onClick={() => handleAnswerChange(q.id, opt.value)}
                                     className={`px-4 py-2 rounded-md font-medium transition-all duration-200 w-full text-left sm:text-center ${answers[q.id] === opt.value ? 'bg-brand-primary text-white scale-105 shadow-lg' : 'bg-gray-200 hover:bg-gray-300'}`}>
                                       {opt.text}
                                   </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button 
                  onClick={handleSubmit}
                  disabled={!allQuestionsAnswered}
                  className="mt-8 w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
                    See My Results
                </button>
                 <p className="text-xs text-center text-gray-500 mt-4">This is a screening tool, not a diagnosis. Please consult a healthcare professional for a formal assessment.</p>
            </div>
        </div>
    );
};

export default AddictionDetailPage;