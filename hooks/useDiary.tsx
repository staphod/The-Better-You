import { useState, useEffect } from 'react';
import type { DiaryEntry } from '@/types';

const DIARY_STORAGE_KEY = 'the-better-you-diary';

const getStoredDiary = (): DiaryEntry[] => {
    try {
        const storedDiaryJSON = localStorage.getItem(DIARY_STORAGE_KEY);
        if (!storedDiaryJSON) return [];
        const entries = JSON.parse(storedDiaryJSON);
        return Array.isArray(entries) ? entries : [];
    } catch (error) {
        console.error("Failed to parse diary entries from localStorage", error);
        return [];
    }
};

export const useDiary = () => {
    const [entries, setEntries] = useState<DiaryEntry[]>(getStoredDiary);

    useEffect(() => {
        localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(entries));
    }, [entries]);

    const addEntry = (newEntryData: Omit<DiaryEntry, 'id'|'modified'>) => {
        const newEntry: DiaryEntry = {
            id: crypto.randomUUID(),
            ...newEntryData,
            modified: new Date().toISOString(),
        };
        setEntries(prev => [newEntry, ...prev]);
        return newEntry;
    };
    
    const updateEntry = (updatedEntry: DiaryEntry) => {
        setEntries(prev => prev.map(e => e.id === updatedEntry.id ? { ...updatedEntry, modified: new Date().toISOString() } : e));
    };

    const deleteEntry = (id: string) => {
        setEntries(prev => prev.filter(entry => entry.id !== id));
    };
    
    const getEntryById = (id: string) => {
        return entries.find(entry => entry.id === id);
    };

    return { entries, addEntry, updateEntry, deleteEntry, getEntryById };
};