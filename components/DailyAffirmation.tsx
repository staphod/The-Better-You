import React, { useState, useEffect } from 'react';
import { EditIcon, CheckCircleIcon } from '@/components/icons/StatusIcons';
import { affirmations } from '@/data/affirmations';

const CUSTOM_AFFIRMATION_KEY = 'daily-affirmation-custom';
const DEFAULT_AFFIRMATION = "I am capable of achieving great things.";

const DailyAffirmation: React.FC = () => {
    const [affirmation, setAffirmation] = useState(DEFAULT_AFFIRMATION);
    const [isCustom, setIsCustom] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState('');

    const loadAffirmation = () => {
        try {
            const customAffirmation = localStorage.getItem(CUSTOM_AFFIRMATION_KEY);
            if (customAffirmation && customAffirmation.trim() !== '') {
                setAffirmation(customAffirmation);
                setIsCustom(true);
            } else {
                const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
                setAffirmation(randomAffirmation || DEFAULT_AFFIRMATION);
                setIsCustom(false);
            }
        } catch (e) {
            console.error("Could not read affirmation from localStorage", e);
            setAffirmation(DEFAULT_AFFIRMATION);
        }
    };

    useEffect(() => {
        loadAffirmation();
    }, []);

    const handleEdit = () => {
        setEditText(affirmation);
        setIsEditing(true);
    };

    const handleSave = () => {
        const newAffirmation = editText.trim();
        if (newAffirmation) {
            setAffirmation(newAffirmation);
            setIsCustom(true);
            try {
                localStorage.setItem(CUSTOM_AFFIRMATION_KEY, newAffirmation);
            } catch (e) { console.error("Could not save custom affirmation", e); }
        }
        setIsEditing(false);
    };

    const handleUseRandom = () => {
        try {
            localStorage.removeItem(CUSTOM_AFFIRMATION_KEY);
        } catch (e) { console.error("Could not remove custom affirmation", e); }
        loadAffirmation();
        setIsEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSave();
        else if (e.key === 'Escape') setIsEditing(false);
    };

    return (
        <div className="bg-brand-surface p-6 rounded-xl border border-slate-200/80 shadow-sm relative group h-full flex flex-col justify-center min-h-[160px]">
            <h3 className="text-sm font-semibold text-brand-text-muted mb-3">
                {isCustom ? 'Your Custom Affirmation' : 'Daily Affirmation'}
            </h3>
            {isEditing ? (
                <div className="space-y-3">
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
                    <button onClick={handleUseRandom} className="text-xs text-brand-primary hover:underline">
                        Use a random affirmation instead
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
