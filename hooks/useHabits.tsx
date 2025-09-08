import { useState, useEffect } from 'react';
import type { Habit, HabitMeasurement } from '@/types';

const HABITS_STORAGE_KEY = 'the-better-you-habits';

const toYYYYMMDD = (date: Date): string => date.toISOString().split('T')[0];

const getStoredHabits = (): Habit[] => {
    try {
        const storedHabits = localStorage.getItem(HABITS_STORAGE_KEY);
        // This simple check helps avoid loading malformed data from older versions.
        if (storedHabits && !storedHabits.includes('measurement')) {
             localStorage.removeItem(HABITS_STORAGE_KEY);
             return [];
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

    const addHabit = (newHabitData: Omit<Habit, 'id' | 'history'>) => {
        const newHabit: Habit = {
            id: crypto.randomUUID(),
            ...newHabitData,
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

    const logHabit = (id: string, value: number) => {
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
    };
    
    return { habits, addHabit, updateHabit, deleteHabit, logHabit };
};