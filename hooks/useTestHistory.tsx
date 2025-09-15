import { useState, useEffect, useCallback } from 'react';
import type { TestHistoryItem } from '@/types';

const HISTORY_STORAGE_KEY = 'the-better-you-test-history';

const getStoredHistory = (): TestHistoryItem[] => {
    try {
        const stored = localStorage.getItem(HISTORY_STORAGE_KEY);
        if (!stored) return [];
        const items = JSON.parse(stored);
        return Array.isArray(items) ? items : [];
    } catch (error) {
        console.error("Failed to parse test history from localStorage", error);
        return [];
    }
};

export const useTestHistory = () => {
    const [history, setHistory] = useState<TestHistoryItem[]>(getStoredHistory);

    useEffect(() => {
        localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
    }, [history]);

    const addHistoryItem = useCallback((itemData: Omit<TestHistoryItem, 'id'>) => {
        const newItem: TestHistoryItem = {
            id: crypto.randomUUID(),
            ...itemData,
        };
        setHistory(prev => [newItem, ...prev]);
    }, []);

    const getHistoryItemById = useCallback((id: string) => {
        return history.find(item => item.id === id);
    }, [history]);

    return { history, addHistoryItem, getHistoryItemById };
};
