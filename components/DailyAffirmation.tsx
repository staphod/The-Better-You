import React, { useState, useEffect } from 'react';
import { EditIcon, CheckCircleIcon } from '@/components/icons/StatusIcons';

const AFFIRMATION_KEY = 'daily-affirmation';
const DEFAULT_AFFIRMATION = "I am capable of achieving great things.";

const DailyAffirmation: React.FC = () => {
    const [affirmation, setAffirmation] = useState(DEFAULT_AFFIRMATION);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState('');

    useEffect(() => {
        try {
            const storedAffirmation = localStorage.getItem(AFFIRMATION_KEY);
            if (storedAffirmation && storedAffirmation.trim() !== '') {
                setAffirmation(storedAffirmation);
            }
        } catch (e) {
            console.error("Could not read affirmation from localStorage", e);
        }
    }, []);

    const handleEdit = () => {
        setEditText(affirmation);
        setIsEditing(true);
    };

    const handleSave = () => {
        const newAffirmation = editText.trim() || DEFAULT_AFFIRMATION;
        setAffirmation(newAffirmation);
        try {
            localStorage.setItem(AFFIRMATION_KEY, newAffirmation);
        } catch (e) {
            console.error("Could not save affirmation to localStorage", e);
        }
        setIsEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSave();
        } else if (e.key === 'Escape') {
            setIsEditing(false);
        }
    };

    return (
        <div className="bg-brand-surface p-6 rounded-xl border border-slate-200/80 shadow-sm relative group h-full flex flex-col justify-center">
            <h3 className="text-sm font-semibold text-brand-text-muted mb-3">Daily Affirmation</h3>
            {isEditing ? (
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full bg-brand-bg text-brand-text p-2 rounded-md border border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        autoFocus
                    />
                    <button onClick={handleSave} className="p-2 text-brand-success hover:bg-green-100 rounded-full flex-shrink-0" aria-label="Save affirmation">
                        <CheckCircleIcon className="h-6 w-6" />
                    </button>
                </div>
            ) : (
                <>
                    <p className="text-xl font-semibold text-brand-text italic">"{affirmation}"</p>
                    <button 
                        onClick={handleEdit} 
                        className="absolute top-4 right-4 p-2 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
                        aria-label="Edit affirmation"
                    >
                        <EditIcon className="h-5 w-5" />
                    </button>
                </>
            )}
        </div>
    );
};

export default DailyAffirmation;
