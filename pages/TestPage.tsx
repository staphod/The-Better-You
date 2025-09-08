import React, { useState, useEffect, useCallback } from 'react';
// FIX: Using namespace import for react-router-dom to fix module resolution issues.
import * as ReactRouterDom from 'react-router-dom';
import type { FullTest, Question } from '@/types';
import { fetchTestById } from '@/services/api';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { ClipboardIcon, CheckCircleIcon } from '@/components/icons/StatusIcons';
import Sparks from '@/components/Sparks';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"></div>
    </div>
);

const TestResult: React.FC<{ result: any, onCopy: () => void, copied: boolean }> = ({ result, onCopy, copied }) => (
    <div className="bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
        <h2 className="text-2xl font-bold text-brand-text-primary mb-4">Your Results</h2>
        <p className="text-brand-text-secondary mb-6">{result.explanation}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
                <h3 className="font-semibold text-brand-primary mb-2">Strengths</h3>
                <ul className="list-disc list-inside space-y-1 text-brand-text-secondary">
                    {result.strengths.map((s: string) => <li key={s}>{s}</li>)}
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-brand-primary mb-2">Weaknesses</h3>
                <ul className="list-disc list-inside space-y-1 text-brand-text-secondary">
                    {result.weaknesses.map((w: string) => <li key={w}>{w}</li>)}
                </ul>
            </div>
             <div>
                <h3 className="font-semibold text-brand-primary mb-2">Best Job Fits</h3>
                <ul className="list-disc list-inside space-y-1 text-brand-text-secondary">
                    {result.best_work.map((j: string) => <li key={j}>{j}</li>)}
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-brand-primary mb-2">Famous Examples</h3>
                <ul className="list-disc list-inside space-y-1 text-brand-text-secondary">
                    {result.famous.map((p: string) => <li key={p}>{p}</li>)}
                </ul>
            </div>
        </div>
        
        <button onClick={onCopy} className="w-full flex justify-center items-center space-x-2 bg-brand-secondary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50">
           {copied ? <CheckCircleIcon className="h-5 w-5"/> : <ClipboardIcon className="h-5 w-5" />}
           <span>{copied ? 'Copied to Clipboard!' : 'Copy Results'}</span>
        </button>
    </div>
);


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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [testId, isOnline, navigate]);
    
    const handleAnswerChange = (questionId: string, value: number) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleSubmit = () => {
        if (!test) return;
        const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
        const resultKey = totalScore >= 0 ? "high-score" : "low-score";
        setResult(test.result_template[resultKey]);
        setShowSparks(true);
    };

    const handleCopy = useCallback(() => {
        if (!result) return;
        const textToCopy = `
My Test Results:
---
Explanation: ${result.explanation}
Strengths: ${result.strengths.join(', ')}
Weaknesses: ${result.weaknesses.join(', ')}
Best Job Fits: ${result.best_work.join(', ')}
Famous Examples: ${result.famous.join(', ')}
        `.trim();

        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }, [result]);
    
    if (loading) return <LoadingSpinner />;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!test) return <p className="text-center">Test not found.</p>;

    if (result) {
        return (
            <>
                {showSparks && <Sparks />}
                <TestResult result={result} onCopy={handleCopy} copied={copied} />
            </>
        );
    }

    const allQuestionsAnswered = test.questions.length === Object.keys(answers).length;

    return (
        <div className="max-w-2xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-2 text-brand-text-primary">{test.title}</h1>
            <p className="text-center text-brand-text-secondary mb-8">Answer the following questions to discover your result.</p>
            <div className="space-y-6">
                {test.questions.map((q, index) => (
                    <div key={q.id}>
                        <p className="font-semibold mb-2">
                            {index + 1}. {q.text}
                        </p>
                        <div className="flex justify-center space-x-2 sm:space-x-4">
                            {q.options.map(opt => (
                               <button 
                                 key={opt.value} 
                                 onClick={() => handleAnswerChange(q.id, opt.value)}
                                 className={`px-4 py-2 rounded-md font-medium transition-all duration-200 w-full ${answers[q.id] === opt.value ? 'bg-brand-primary text-white scale-105 shadow-lg' : 'bg-gray-200 hover:bg-gray-300'}`}>
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
                Get My Result
            </button>
        </div>
    );
};

export default TestPage;