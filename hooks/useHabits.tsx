import { useState, useEffect } from 'react';
import type { Habit, HabitLog } from '@/types';

const HABITS_STORAGE_KEY = 'the-better-you-habits';

const toYYYYMMDD = (date: Date): string => date.toISOString().split('T')[0];

const getStoredHabits = (): Habit[] => {
    try {
        const storedHabits = localStorage.getItem(HABITS_STORAGE_KEY);
        // Basic migration for users with old data structure.
        if (storedHabits && storedHabits.includes('lastCompleted')) {
            return []; // In a real app, you'd write a migration script. For this demo, we'll just reset.
        }
        return storedHabits ? JSON.parse(storedHabits) : [];
    } catch (error) {
        console.error("Failed to parse habits from localStorage", error);
        return [];
    }
};

export const useHabits = () => {
    const [habits, setHabits] = useState<Habit[]>(getStoredHabits);

    useEffect(() => {
        localStorage.setItem(HABITS_STORAGE_KEY, JSON.stringify(habits));
    }, [habits]);

    const addHabit = (newHabitData: Omit<Habit, 'id' | 'measurement' | 'history'>) => {
        const newHabit: Habit = {
            id: crypto.randomUUID(),
            ...newHabitData,
            measurement: { type: 'daily' },
            history: [],
        };
        setHabits(prev => [...prev, newHabit]);
    };
    
    const updateHabit = (updatedHabit: Habit) => {
        setHabits(prev => prev.map(h => h.id === updatedHabit.id ? updatedHabit : h));
    };

    const deleteHabit = (id: string) => {
        setHabits(prev => prev.filter(habit => habit.id !== id));
    };

    const logHabit = (id: string, status: 'completed' | 'missed') => {
        const todayStr = toYYYYMMDD(new Date());

        setHabits(prev => prev.map(habit => {
            if (habit.id === id) {
                const newHistory = habit.history.filter(log => log.date !== todayStr);
                newHistory.push({ date: todayStr, status });
                return { ...habit, history: newHistory };
            }
            return habit;
        }));
    };
    
    return { habits, addHabit, updateHabit, deleteHabit, logHabit };
};
