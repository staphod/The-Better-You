import { useState, useEffect, useCallback } from 'react';
import type { Habit } from '@/types';

const HABITS_STORAGE_KEY = 'the-better-you-habits';

const toYYYYMMDD = (date: Date): string => date.toISOString().split('T')[0];

const getStoredHabits = (): Habit[] => {
    try {
        const storedHabitsJSON = localStorage.getItem(HABITS_STORAGE_KEY);
        if (!storedHabitsJSON) return [];

        const habitsFromStorage = JSON.parse(storedHabitsJSON);

        if (!Array.isArray(habitsFromStorage)) return [];

        // Data migration for older habits
        const migratedHabits = habitsFromStorage
            .map((habit: any) => {
                if (!habit || typeof habit !== 'object' || !habit.measurement) {
                    return null; // Invalid habit format, filter it out
                }
                if (!habit.category) {
                    return { ...habit, category: 'Other' }; // Add default category
                }
                return habit;
            })
            .filter(Boolean); // Remove null entries

        return migratedHabits as Habit[];
    } catch (error) {
        console.error("Failed to parse or migrate habits from localStorage", error);
        return []; // Return empty array on error
    }
};

export const useHabits = () => {
    const [habits, setHabits] = useState<Habit[]>(getStoredHabits);

    useEffect(() => {
        localStorage.setItem(HABITS_STORAGE_KEY, JSON.stringify(habits));
    }, [habits]);

    const addHabit = useCallback((newHabitData: Omit<Habit, 'id' | 'history'>) => {
        const newHabit: Habit = {
            id: crypto.randomUUID(),
            ...newHabitData,
            history: [],
        };
        setHabits(prev => [...prev, newHabit]);
    }, []);
    
    const updateHabit = useCallback((updatedHabit: Habit) => {
        setHabits(prev => prev.map(h => h.id === updatedHabit.id ? updatedHabit : h));
    }, []);

    const deleteHabit = useCallback((id: string) => {
        setHabits(prev => prev.filter(habit => habit.id !== id));
    }, []);

    const logHabit = useCallback((id: string, value: number) => {
        const todayStr = toYYYYMMDD(new Date());

        setHabits(prev => prev.map(habit => {
            if (habit.id === id) {
                // Remove any existing log for today and add the new one
                const newHistory = habit.history.filter(log => log.date !== todayStr);
                newHistory.push({ date: todayStr, value });
                return { ...habit, history: newHistory };
            }
            return habit;
        }));
    }, []);
    
    return { habits, addHabit, updateHabit, deleteHabit, logHabit };
};