import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
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
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
        <h3 className="text-xl font-bold text-brand-primary mb-3">{result.level ? `${title}: ${result.level}` : title}</h3>
        <p className="text-brand-text-muted mb-4">{result.explanation}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {result.strengths && (
                <div>
                    <h4 className="font-semibold text-brand-text mb-1">Strengths</h4>
                    <ul className="list-disc list-inside space-y-1 text-brand-text-muted">
                        {result.strengths.map((s: string) => <li key={s}>{s}</li>)}
                    </ul>
                </div>
            )}
            {result.weaknesses && (
                <div>
                    <h4 className="font-semibold text-brand-text mb-1">Weaknesses</h4>
                    <ul className="list-disc list-inside space-y-1 text-brand-text-muted">
                        {result.weaknesses.map((w: string) => <li key={w}>{w}</li>)}
                    </ul>
                </div>
            )}
             {result.best_work && (
                <div>
                    <h4 className="font-semibold text-brand-text mb-1">Best Job Fits</h4>
                    <ul className="list-disc list-inside space-y-1 text-brand-text-muted">
                        {result.best_work.map((j: string) => <li key={j}>{j}</li>)}
                    </ul>
                </div>
            )}
            {result.famous && (
                <div>
                    <h4 className="font-semibold text-brand-text mb-1">Famous Examples</h4>
                    <ul className="list-disc list-inside space-y-1 text-brand-text-muted">
                        {result.famous.map((p: string) => <li key={p}>{p}</li>)}
                    </ul>
                </div>
            )}
            {result.strategies && (
                 <div className="md:col-span-2">
                    <h4 className="font-semibold text-brand-text mb-1">Tailored Strategies</h4>
                    <ul className="list-disc list-inside space-y-1 text-brand-text-muted">
                        {result.strategies.map((s: string) => <li key={s}>{s}</li>)}
                    </ul>
                </div>
            )}
             {result.advice && (
                 <div className="md:col-span-2">
                    <h4 className="font-semibold text-brand-text mb-1">Practical Advice</h4>
                    <ul className="list-disc list-inside space-y-1 text-brand-text-muted">
                        {result.advice.map((s: string) => <li key={s}>{s}</li>)}
                    </ul>
                </div>
            )}
        </div>
    </div>
);

const KnowledgeBaseDetailPage: React.FC = () => {
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
    if (error) return <p className="text-center text-brand-danger">{error}</p>;
    if (!test) return <p className="text-center">Article not found.</p>;

    const isDimensional = test.scoringThresholds && 'O' in test.scoringThresholds;
    
    const renderContent = () => {
        if (isDimensional) {
            return (
                <div className="space-y-8">
                    {test.knowledgeBase.resultDetails.map(trait => (
                        <div key={trait.key}>
                            <h2 className="text-2xl font-bold text-brand-text mb-4 pb-2 border-b-2 border-brand-primary">{trait.title}</h2>
                            <div className="space-y-4">
                                <ResultDetailCard 
                                    title={`High ${trait.title}`}
                                    result={test.result_template[`${trait.key}_high`]}
                                />
                                <ResultDetailCard 
                                    title={`Average ${trait.title}`}
                                    result={test.result_template[`${trait.key}_average`]}
                                />
                                <ResultDetailCard 
                                    title={`Low ${trait.title}`}
                                    result={test.result_template[`${trait.key}_low`]}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                 <div className="space-y-6">
                    {test.knowledgeBase.resultDetails.map(detail => (
                        <ResultDetailCard 
                            key={detail.key}
                            title={detail.title}
                            result={test.result_template[detail.key]}
                        />
                    ))}
                </div>
            );
        }
    }
    
    return (
        <div className="max-w-4xl mx-auto bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg">
            <Link to="/tests/knowledge-base" className="text-sm text-brand-primary hover:underline mb-4 inline-block">&larr; Back to Knowledge Base</Link>
            <h1 className="text-3xl font-bold text-brand-text mb-2">{test.title}</h1>
            <p className="text-lg text-brand-text-muted mb-6">An overview of the theory and possible results.</p>
            
            <div className="my-6 p-4 bg-brand-info/10 border-l-4 border-brand-info">
                <h2 className="font-semibold text-brand-info flex items-center gap-2">
                    <LightbulbIcon className="h-5 w-5"/>
                    Theoretical Summary
                </h2>
                <p className="mt-2 text-sm text-brand-text-muted">{test.knowledgeBase.summary}</p>
            </div>

            <h2 className="text-2xl font-bold text-brand-text mt-8 mb-4">Possible Results Explained</h2>
            {renderContent()}

            <div className="mt-8 text-center">
                 <Link to={`/test/${test.id}`} className="inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/90 transition-opacity">
                    Take this Test Now
                </Link>
            </div>
        </div>
    );
};

export default KnowledgeBaseDetailPage;