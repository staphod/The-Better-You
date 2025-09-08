import { useMemo } from 'react';
import type { Habit } from '@/types';

const toYYYYMMDD = (date: Date): string => date.toISOString().split('T')[0];

/**
 * A custom hook that computes statistics for a given habit based on its history.
 * It memoizes the result to prevent unnecessary recalculations.
 * @param habit The habit object.
 * @returns An object containing the calculated streak, total failures, and today's completion status.
 */
export const useHabitStats = (habit: Habit) => {
    return useMemo(() => {
        if (!habit?.history) {
            return { streak: 0, failures: 0, completionStatusForToday: null };
        }

        const sortedHistory = [...habit.history].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        // Calculate total failures
        const totalFailures = sortedHistory.filter(log => log.status === 'missed').length;

        // Calculate current streak
        let currentStreak = 0;
        const today = new Date();
        const todayStr = toYYYYMMDD(today);
        
        // Find the starting point for streak calculation (today or yesterday)
        const latestLog = sortedHistory.find(log => log.date <= todayStr);
        
        if (latestLog && latestLog.status === 'completed') {
            const latestLogDate = new Date(latestLog.date + 'T12:00:00'); // Use midday to avoid timezone issues
            const daysDiff = Math.round((today.getTime() - latestLogDate.getTime()) / (1000 * 60 * 60 * 24));
            
            if (daysDiff <= 1) { // Streak is current if last completion was today or yesterday
                let currentDate = latestLogDate;
                
                for (const log of sortedHistory) {
                     if (log.status === 'completed') {
                        const logDate = new Date(log.date + 'T12:00:00');
                        const expectedDateStr = toYYYYMMDD(currentDate);
                        if (log.date === expectedDateStr) {
                             currentStreak++;
                             currentDate.setDate(currentDate.getDate() - 1);
                        } else {
                            // Break if there's a gap in the dates
                            break;
                        }
                     } else {
                         // Break if a 'missed' day is encountered in the streak
                         break;
                     }
                }
            }
        }
        
        // Determine today's status
        const todayLog = sortedHistory.find(log => log.date === todayStr);
        const completionStatusForToday = todayLog ? todayLog.status : null;

        return {
            streak: currentStreak,
            failures: totalFailures,
            completionStatusForToday,
        };

    }, [habit.history]);
};
