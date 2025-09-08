import { useState, useEffect } from 'react';
import type { Habit } from '@/types';

const HABITS_STORAGE_KEY = 'the-better-you-habits';

const getStoredHabits = (): Habit[] => {
    try {
        const storedHabits = localStorage.getItem(HABITS_STORAGE_KEY);
        return storedHabits ? JSON.parse(storedHabits) : [];
    } catch (error) {
        console.error("Failed to parse habits from localStorage", error);
        return [];
    }
};

const isToday = (date: Date): boolean => {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate();
};

const isYesterday = (date: Date): boolean => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return date.getFullYear() === yesterday.getFullYear() &&
           date.getMonth() === yesterday.getMonth() &&
           date.getDate() === yesterday.getDate();
};


export const useHabits = () => {
    const [habits, setHabits] = useState<Habit[]>(getStoredHabits);

    useEffect(() => {
        localStorage.setItem(HABITS_STORAGE_KEY, JSON.stringify(habits));
    }, [habits]);

    const addHabit = (newHabitData: Omit<Habit, 'id' | 'streak' | 'lastCompleted'>) => {
        const newHabit: Habit = {
            id: crypto.randomUUID(),
            ...newHabitData,
            streak: 0,
            lastCompleted: null,
        };
        setHabits(prev => [...prev, newHabit]);
    };
    
    const updateHabit = (updatedHabit: Habit) => {
        setHabits(prev => prev.map(h => h.id === updatedHabit.id ? updatedHabit : h));
    };

    const deleteHabit = (id: string) => {
        setHabits(prev => prev.filter(habit => habit.id !== id));
    };

    const completeHabit = (id: string) => {
        setHabits(prev => prev.map(habit => {
            if (habit.id === id) {
                const today = new Date();
                const todayStr = today.toISOString().split('T')[0];

                if (habit.lastCompleted === todayStr) {
                    return habit; // Already completed today
                }
                
                let newStreak = habit.streak;
                if (habit.lastCompleted) {
                    const lastCompletedDate = new Date(habit.lastCompleted);
                     if (isYesterday(lastCompletedDate)) {
                        newStreak += 1;
                    } else if (!isToday(lastCompletedDate)) {
                        newStreak = 1;
                    }
                } else {
                    newStreak = 1;
                }
                
                return { ...habit, streak: newStreak, lastCompleted: todayStr };
            }
            return habit;
        }));
    };
    
    return { habits, addHabit, updateHabit, deleteHabit, completeHabit };
};