import React, { useState, useEffect } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import type { FullTest } from '@/types';
import { fetchTestById } from '@/services/api';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { LightbulbIcon } from '@/components/icons/StatusIcons';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"></div>
    </div>
);

const ResultDetailCard: React.FC<{ title: string, result: any }> = ({ title, result }) => (
    <div className="bg-gray-50 p-6 rounded-lg border">
        <h3 className="text-xl font-bold text-brand-primary mb-3">{title}</h3>
        <p className="text-brand-text-secondary mb-4">{result.explanation}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
                <h4 className="font-semibold text-brand-text-primary mb-1">Strengths</h4>
                <ul className="list-disc list-inside space-y-1 text-brand-text-secondary">
                    {result.strengths.map((s: string) => <li key={s}>{s}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-brand-text-primary mb-1">Weaknesses</h4>
                <ul className="list-disc list-inside space-y-1 text-brand-text-secondary">
                    {result.weaknesses.map((w: string) => <li key={w}>{w}</li>)}
                </ul>
            </div>
             <div>
                <h4 className="font-semibold text-brand-text-primary mb-1">Best Job Fits</h4>
                <ul className="list-disc list-inside space-y-1 text-brand-text-secondary">
                    {result.best_work.map((j: string) => <li key={j}>{j}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-brand-text-primary mb-1">Famous Examples</h4>
                <ul className="list-disc list-inside space-y-1 text-brand-text-secondary">
                    {result.famous.map((p: string) => <li key={p}>{p}</li>)}
                </ul>
            </div>
        </div>
    </div>
);

const KnowledgeBaseDetailPage: React.FC = () => {
    const { useParams, useNavigate, Link } = ReactRouterDom;
    const { testId } = useParams<{ testId: string }>();
    const navigate = useNavigate();
    const { isOnline } = useOnlineStatus();

    const [test, setTest] = useState<FullTest | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
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
                setError('Failed to load the knowledge base article.');
            } finally {
                setLoading(false);
            }
        };

        loadTest();
    }, [testId, isOnline, navigate]);

    if (loading) return <LoadingSpinner />;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!test) return <p className="text-center">Article not found.</p>;
    
    return (
        <div className="max-w-4xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg">
            <Link to="/tests/knowledge-base" className="text-sm text-brand-primary hover:underline mb-4 inline-block">&larr; Back to Knowledge Base</Link>
            <h1 className="text-3xl font-bold text-brand-text-primary mb-2">{test.title}</h1>
            <p className="text-lg text-brand-text-secondary mb-6">An overview of the theory and possible results.</p>
            
            <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-400">
                <h2 className="font-semibold text-blue-800 flex items-center gap-2">
                    <LightbulbIcon className="h-5 w-5"/>
                    Theoretical Summary
                </h2>
                <p className="mt-2 text-sm text-blue-700">{test.knowledgeBase.summary}</p>
            </div>

            <h2 className="text-2xl font-bold text-brand-text-primary mt-8 mb-4">Possible Results Explained</h2>
            <div className="space-y-6">
                {test.knowledgeBase.resultDetails.map(detail => (
                    <ResultDetailCard 
                        key={detail.key}
                        title={detail.title}
                        result={test.result_template[detail.key]}
                    />
                ))}
            </div>

            <div className="mt-8 text-center">
                 <Link to={`/test/${test.id}`} className="inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                    Take this Test Now
                </Link>
            </div>
        </div>
    );
};

export default KnowledgeBaseDetailPage;
