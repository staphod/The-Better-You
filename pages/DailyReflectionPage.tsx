import React, { useState, useEffect, useMemo } from 'react';
import { allPrompts, reflectionPrompts, ReflectionPromptCategory } from '@/data/reflectionPrompts';
import { FeatherIcon } from '@/components/icons/ModuleIcons';

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

const Accordion: React.FC<{ title: string; children: React.ReactNode; isOpen: boolean; onToggle: () => void }> = ({ title, children, isOpen, onToggle }) => (
  <div className="border border-slate-200 rounded-lg bg-brand-surface shadow-sm">
    <h2>
      <button
        type="button"
        className="flex items-center justify-between w-full p-4 font-medium text-left text-brand-text bg-slate-50 hover:bg-slate-100 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg className={`w-6 h-6 shrink-0 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
    </h2>
    {isOpen && (
      <div className="p-4 border-t border-slate-200 bg-white">
        {children}
      </div>
    )}
  </div>
);

const DailyReflectionPage: React.FC = () => {
    const [reflection, setReflection] = useState('');
    const [isSaved, setIsSaved] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const storageKey = useMemo(() => getStorageKey(), []);
    
    const dailyPrompt = useMemo(() => {
        const dayIndex = getDayOfYear();
        return allPrompts[dayIndex % allPrompts.length];
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
            const timer = setTimeout(() => setIsSaved(false), 2000);
            return () => clearTimeout(timer);
        } catch (e) {
            console.error("Could not save reflection to localStorage", e);
        }
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReflection(e.target.value);
        if (isSaved) {
            setIsSaved(false);
        }
    };

    const toggleAccordion = (title: string) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-left">
                <h1 className="text-3xl font-bold text-brand-text">Daily Reflection</h1>
                <p className="mt-2 text-lg text-brand-text-muted">
                    Your private space to answer daily prompts and track your thoughts over time.
                </p>
            </div>
            
            <div className="bg-brand-surface p-6 rounded-xl border border-slate-200/80 shadow-sm h-full flex flex-col">
                <h3 className="text-sm font-semibold text-brand-text-muted mb-1">Prompt of the Day</h3>
                <p className="text-brand-text mb-3 font-medium text-lg">{dailyPrompt}</p>
                <textarea
                    value={reflection}
                    onChange={handleChange}
                    placeholder="Write your thoughts here..."
                    className="w-full flex-grow p-3 border border-slate-300 rounded-md focus:ring-brand-primary focus:border-brand-primary bg-brand-bg text-brand-text min-h-[200px] resize-y"
                    aria-label="Daily reflection input"
                />
                <button
                    onClick={handleSave}
                    className={`w-full sm:w-auto sm:self-end mt-3 font-bold py-2 px-6 rounded-lg transition-colors ${isSaved ? 'bg-brand-success text-white cursor-default' : 'bg-brand-primary text-white hover:bg-brand-primary/90'}`}
                    disabled={isSaved || reflection.trim() === ''}
                >
                    {isSaved ? 'Saved!' : 'Save Reflection'}
                </button>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold text-brand-text mb-4">Explore More Prompts</h2>
                <div className="space-y-2">
                    {reflectionPrompts.map(category => (
                        <Accordion 
                            key={category.title}
                            title={category.title}
                            isOpen={openAccordion === category.title}
                            onToggle={() => toggleAccordion(category.title)}
                        >
                            <ul className="list-disc list-inside space-y-2 text-brand-text-muted">
                                {category.prompts.map((prompt, index) => (
                                    <li key={index}>{prompt}</li>
                                ))}
                            </ul>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DailyReflectionPage;
