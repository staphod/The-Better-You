import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDiary } from '@/hooks/useDiary';
import type { DiaryEntry } from '@/types';

const DiaryDetailPage: React.FC = () => {
    const { entryId } = useParams<{ entryId: string }>();
    const navigate = useNavigate();
    const { getEntryById } = useDiary();
    const [entry, setEntry] = useState<DiaryEntry | null>(null);

    useEffect(() => {
        if (entryId) {
            const foundEntry = getEntryById(entryId);
            if (foundEntry) {
                setEntry(foundEntry);
            } else {
                navigate('/diary'); // Redirect if not found
            }
        }
    }, [entryId, getEntryById, navigate]);

    if (!entry) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"></div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <button onClick={() => navigate('/diary')} className="text-brand-primary hover:underline">
                    &larr; Back to Diary
                </button>
                <Link
                    to={`/diary/entry/${entry.id}`}
                    className="bg-brand-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-brand-primary/90 transition-opacity"
                >
                    Edit Entry
                </Link>
            </div>
            <div className="bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-brand-text mb-2 pb-2 border-b border-slate-200">{entry.title}</h1>
                <p className="text-sm text-brand-text-muted mb-6">
                    Last modified: {new Date(entry.modified).toLocaleString()}
                </p>
                <div
                    className="prose max-w-none text-brand-text-muted"
                    dangerouslySetInnerHTML={{ __html: entry.content }}
                />
            </div>
        </div>
    );
};

export default DiaryDetailPage;