import React, { useState, useEffect, useRef } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { useDiary } from '@/hooks/useDiary';
import { DiaryEntry } from '@/types';

const RichTextEditor: React.FC<{ value: string; onChange: (value: string) => void; }> = ({ value, onChange }) => {
    const editorRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (editorRef.current && value !== editorRef.current.innerHTML) {
            editorRef.current.innerHTML = value;
        }
    }, [value]);

    const handleInput = () => {
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    };
    
    const handleFormat = (command: string) => {
        document.execCommand(command, false, undefined);
        editorRef.current?.focus();
    };

    return (
        <div className="border border-slate-300 rounded-md">
            <div className="flex items-center p-2 border-b border-slate-300 bg-slate-50 space-x-2">
                <button type="button" onClick={() => handleFormat('bold')} className="font-bold w-8 h-8 rounded hover:bg-slate-200">B</button>
                <button type="button" onClick={() => handleFormat('italic')} className="italic w-8 h-8 rounded hover:bg-slate-200">I</button>
                <button type="button" onClick={() => handleFormat('underline')} className="underline w-8 h-8 rounded hover:bg-slate-200">U</button>
            </div>
            <div
                ref={editorRef}
                onInput={handleInput}
                contentEditable={true}
                className="prose max-w-none p-4 min-h-[300px] focus:outline-none"
                dangerouslySetInnerHTML={{ __html: value }}
            />
        </div>
    );
};


const DiaryEntryPage: React.FC = () => {
    const { useParams, useNavigate } = ReactRouterDom;
    const { entryId } = useParams<{ entryId: string }>();
    const navigate = useNavigate();
    const { getEntryById, addEntry, updateEntry } = useDiary();

    const [entry, setEntry] = useState<Partial<DiaryEntry>>({ title: '', content: '' });
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (entryId && entryId !== 'new') {
            const existingEntry = getEntryById(entryId);
            if (existingEntry) {
                setEntry(existingEntry);
            } else {
                navigate('/diary'); // Not found
            }
        } else {
            setEntry({ title: '', content: '' });
        }
    }, [entryId, getEntryById, navigate]);

    const handleSave = () => {
        if (!entry.title?.trim()) {
            alert("Please enter a title for your entry.");
            return;
        }
        setIsSaving(true);
        if (entry.id) {
            updateEntry(entry as DiaryEntry);
        } else {
            addEntry({ title: entry.title || 'Untitled', content: entry.content || '' });
        }
        
        setTimeout(() => {
            setIsSaving(false);
            navigate('/diary');
        }, 500); // Give user feedback
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <button onClick={() => navigate('/diary')} className="text-brand-primary hover:underline">
                    &larr; Back to Diary
                </button>
                <button
                    onClick={handleSave}
                    className="bg-brand-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-brand-primary/90 transition-opacity disabled:opacity-50"
                    disabled={isSaving}
                >
                    {isSaving ? 'Saving...' : 'Save'}
                </button>
            </div>
            <div className="bg-brand-surface p-6 sm:p-8 rounded-lg shadow-lg">
                <input
                    type="text"
                    placeholder="Entry Title"
                    value={entry.title}
                    onChange={(e) => setEntry(prev => ({ ...prev, title: e.target.value }))}
                    className="text-3xl font-bold w-full focus:outline-none mb-4 pb-2 border-b-2 border-slate-200 focus:border-brand-primary"
                />
                <RichTextEditor
                    value={entry.content || ''}
                    onChange={(content) => setEntry(prev => ({ ...prev, content }))}
                />
            </div>
        </div>
    );
};

export default DiaryEntryPage;