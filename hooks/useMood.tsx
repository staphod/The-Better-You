import { useState, useEffect, useCallback } from 'react';
import type { MoodLog } from '@/types';

const MOOD_STORAGE_KEY = 'the-better-you-mood-logs';

const getStoredMoods = (): MoodLog[] => {
    try {
        const stored = localStorage.getItem(MOOD_STORAGE_KEY);
        if (!stored) return [];
        const items = JSON.parse(stored);
        return Array.isArray(items) ? items : [];
    } catch (error) {
        console.error("Failed to parse mood logs from localStorage", error);
        return [];
    }
};

export const useMood = () => {
    const [moodLogs, setMoodLogs] = useState<MoodLog[]>(getStoredMoods);

    useEffect(() => {
        localStorage.setItem(MOOD_STORAGE_KEY, JSON.stringify(moodLogs));
    }, [moodLogs]);

    const addMoodLog = useCallback((itemData: Omit<MoodLog, 'id' | 'date'>) => {
        const newItem: MoodLog = {
            id: crypto.randomUUID(),
            date: new Date().toISOString(),
            ...itemData,
        };
        setMoodLogs(prev => [newItem, ...prev]);
    }, []);

    const deleteMoodLog = useCallback((id: string) => {
        setMoodLogs(prev => prev.filter(item => item.id !== id));
    }, []);

    return { moodLogs, addMoodLog, deleteMoodLog };
};
