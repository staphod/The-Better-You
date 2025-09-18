import React, { useState, useEffect, useMemo } from 'react';
import { reflectionPrompts } from '@/data/reflectionPrompts';

const getDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
};

const getStorageKey = () => {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    return `daily-reflection-${today}`;
};

const DailyReflection: React.FC = () => {
    const [reflection, setReflection] = useState('');
    const [isSaved, setIsSaved] = useState(false);
    
    const storageKey = useMemo(() => getStorageKey(), []);
    
    const dailyPrompt = useMemo(() => {
        const dayIndex = getDayOfYear();
        return reflectionPrompts[dayIndex % reflectionPrompts.length];
    }, []);

    useEffect(() => {
        try {
            const savedReflection = localStorage.getItem(storageKey);
            if (savedReflection) {
                setReflection(savedReflection);
                if (savedReflection.trim() !== '') {
                    setIsSaved(true);
                }
            }
        } catch (e) {
            console.error("Could not read reflection from localStorage", e);
        }
    }, [storageKey]);

    const handleSave = () => {
        try {
            localStorage.setItem(storageKey, reflection);
            setIsSaved(true);
            const timer = setTimeout(() => setIsSaved(false), 2000); // UI feedback for 2s
            return () => clearTimeout(timer);
        } catch (e) {
            console.error("Could not save reflection to localStorage", e);
        }
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReflection(e.target.value);
        if (isSaved) {
            setIsSaved(false); // Reset saved state on new input
        }
    };

    return (
        <div className="bg-brand-surface p-6 rounded-xl border border-slate-200/80 shadow-sm h-full flex flex-col">
            <h3 className="text-sm font-semibold text-brand-text-muted mb-1">Daily Reflection</h3>
            <p className="text-brand-text mb-3 font-medium">{dailyPrompt}</p>
            <textarea
                value={reflection}
                onChange={handleChange}
                placeholder="Write your thoughts here..."
                className="w-full flex-grow p-2 border border-slate-300 rounded-md focus:ring-brand-primary focus:border-brand-primary bg-brand-bg text-brand-text min-h-[100px] resize-none"
                aria-label="Daily reflection input"
            />
            <button
                onClick={handleSave}
                className={`w-full mt-3 font-bold py-2 px-4 rounded-lg transition-colors ${isSaved ? 'bg-brand-success text-white cursor-default' : 'bg-brand-primary text-white hover:bg-brand-primary/90'}`}
                disabled={isSaved}
            >
                {isSaved ? 'Saved for Today!' : 'Save Reflection'}
            </button>
        </div>
    );
};

export default DailyReflection;
