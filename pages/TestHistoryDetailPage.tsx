import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import type { FullTest, TestHistoryItem } from '@/types';
import { fetchTestById } from '@/services/api';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { useDiary } from '@/hooks/useDiary';
import { useTestHistory } from '@/hooks/useTestHistory';
import TestResultDisplay from '@/components/TestResultDisplay';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"></div>
    </div>
);

const TestHistoryDetailPage: React.FC = () => {
    const { historyId } = useParams<{ historyId: string }>();
    const navigate = useNavigate();
    const { isOnline } = useOnlineStatus();
    const { addEntry } = useDiary();
    const { getHistoryItemById } = useTestHistory();

    const [test, setTest] = useState<FullTest | null>(null);
    const [historyItem, setHistoryItem] = useState<TestHistoryItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const [copied, setCopied] = useState(false);
    const [savedToDiary, setSavedToDiary] = useState(false);

    useEffect(() => {
        if (!historyId) {
            setError("History item not specified.");
            setLoading(false);
            return;
        }

        if (!isOnline) {
            navigate('/offline');
            return;
        }

        const loadData = async () => {
            try {
                setLoading(true);
                const item = getHistoryItemById(historyId);
                if (!item) {
                    throw new Error("Test history item not found.");
                }
                setHistoryItem(item);

                const testData = await fetchTestById(item.testId);
                setTest(testData);
                setError(null);
            } catch (err: any) {
                setError(err.message || 'Failed to load the test result.');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [historyId, isOnline, navigate, getHistoryItemById]);

    const handleCopy = useCallback(() => {
        if (!historyItem || !test) return;
        let textToCopy = `My ${test.title} Results (from ${new Date(historyItem.dateCompleted).toLocaleDateString()}):\n---\n`;

        if (test.scoringThresholds && 'O' in test.scoringThresholds) {
            textToCopy += Object.keys(historyItem.result.levels).map(traitKey => {
                 const traitTitle = test.knowledgeBase.resultDetails.find(d => d.key === traitKey)?.title || traitKey;
                 return `${traitTitle}: ${historyItem.result.levels[traitKey]}`;
            }).join('\n');
        } else {
             textToCopy += historyItem.result.level ? `${historyItem.result.level}\n${historyItem.result.explanation}` : `${historyItem.result.explanation}`;
        }

        navigator.clipboard.writeText(textToCopy.trim()).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }, [historyItem, test]);
    
    const handleSaveToDiary = useCallback(() => {
        if (!historyItem || !test) return;
        
        const isDimensional = test.scoringThresholds && 'O' in test.scoringThresholds;
        let content = ``;

        if (isDimensional) {
            content = Object.keys(historyItem.result.levels).map(traitKey => {
                const traitData = test.result_template[`${traitKey}_${historyItem.result.levels[traitKey].toLowerCase()}`];
                const traitTitle = test.knowledgeBase.resultDetails.find(d => d.key === traitKey)?.title || traitKey;
                return `<h3>${traitTitle}: ${historyItem.result.levels[traitKey]}</h3><p>${traitData.explanation}</p>`;
            }).join('');
        } else {
            content = `<h3>${historyItem.result.level || 'Result'}</h3><p>${historyItem.result.explanation}</p>`;
            if(historyItem.result.advice) {
                content += `<h4>Advice</h4><ul>${historyItem.result.advice.map((a: string) => `<li>${a}</li>`).join('')}</ul>`;
            }
             if(historyItem.result.strategies) {
                content += `<h4>Strategies</h4><ul>${historyItem.result.strategies.map((s: string) => `<li>${s}</li>`).join('')}</ul>`;
            }
        }

        addEntry({
            title: `Test Results (from ${new Date(historyItem.dateCompleted).toLocaleDateString()}): ${test.title}`,
            content: content
        });
        setSavedToDiary(true);
        setTimeout(() => setSavedToDiary(false), 2000);
    }, [historyItem, test, addEntry]);

    const handleRetake = useCallback(() => {
        if (test) {
            navigate(`/test/${test.id}`);
        }
    }, [test, navigate]);

    if (loading) return <LoadingSpinner />;
    if (error) return <p className="text-center text-brand-danger">{error}</p>;
    if (!test || !historyItem) return <p className="text-center">Could not load result details.</p>;

    return (
        <div>
            <Link to="/tests/history" className="text-sm text-brand-primary hover:underline mb-4 inline-block">&larr; Back to Test History</Link>
            <TestResultDisplay
                result={historyItem.result}
                test={test}
                onCopy={handleCopy}
                copied={copied}
                onRetake={handleRetake}
                onSaveToDiary={handleSaveToDiary}
                savedToDiary={savedToDiary}
            />
        </div>
    );
};

export default TestHistoryDetailPage;