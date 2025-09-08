import { useMemo } from 'react';
import type { Habit, HabitLog } from '@/types';

export const toYYYYMMDD = (date: Date): string => date.toISOString().split('T')[0];

export const isDayCompleted = (habit: Habit, log: HabitLog): boolean => {
    switch (habit.measurement.type) {
        case 'daily':
            return log.value >= 1;
        case 'reps':
        case 'duration':
        case 'count':
            return log.value >= habit.measurement.goal;
        default:
            return false;
    }
};

/**
 * A custom hook that computes statistics for a given habit based on its history.
 * @param habit The habit object.
 * @returns An object containing calculated stats.
 */
export const useHabitStats = (habit: Habit) => {
    return useMemo(() => {
        if (!habit?.history) {
            return { streak: 0, failures: 0, completionValueForToday: null, isCompletedToday: false };
        }

        const sortedHistory = [...habit.history].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        const historyByDate = new Map(sortedHistory.map(log => [log.date, log]));

        // --- Calculate total failures ---
        const totalFailures = sortedHistory.filter(log => !isDayCompleted(habit, log)).length;
        
        // --- Calculate today's status ---
        const todayStr = toYYYYMMDD(new Date());
        const todayLog = historyByDate.get(todayStr);
        const completionValueForToday = todayLog ? todayLog.value : null;
        const isCompletedToday = todayLog ? isDayCompleted(habit, todayLog) : false;

        // --- Calculate current streak ---
        let currentStreak = 0;
        let currentDate = new Date();
        
        // If today is completed, start streak from today.
        // If not, start checking from yesterday.
        if (!isCompletedToday) {
            currentDate.setDate(currentDate.getDate() - 1);
        }

        while (true) {
            const dateStr = toYYYYMMDD(currentDate);
            const log = historyByDate.get(dateStr);
            
            if (log && isDayCompleted(habit, log)) {
                currentStreak++;
                currentDate.setDate(currentDate.getDate() - 1); // Move to the previous day
            } else {
                break; // Streak is broken
            }
        }

        return {
            streak: currentStreak,
            failures: totalFailures,
            completionValueForToday,
            isCompletedToday,
        };

    }, [habit]);
};