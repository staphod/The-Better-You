import React, { useEffect, useRef } from 'react';
import type { Habit } from '@/types';
import { toYYYYMMDD, isDayCompleted } from '@/hooks/useHabitStats';

// Let TypeScript know that 'Chart' is a global variable from the imported CDN script
declare var Chart: any;

interface HabitChartsProps {
    habit: Habit;
}

const HabitCharts: React.FC<HabitChartsProps> = ({ habit }) => {
    const dailyChartRef = useRef<HTMLCanvasElement>(null);
    const weeklyChartRef = useRef<HTMLCanvasElement>(null);
    const dailyChartInstance = useRef<any>(null);
    const weeklyChartInstance = useRef<any>(null);

    useEffect(() => {
        if (typeof Chart === 'undefined' || !habit.history) return;

        const historyByDate = new Map(habit.history.map(log => [log.date, log]));

        // --- 1. Daily Chart Data (Last 7 days) ---
        const dailyLabels: string[] = [];
        const dailyData: number[] = [];
        const today = new Date();
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            dailyLabels.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
            const dateStr = toYYYYMMDD(date);
            const log = historyByDate.get(dateStr);
            dailyData.push(log ? log.value : 0);
        }

        // --- 2. Weekly Chart Data (Last 8 weeks) ---
        const weeklyLabels: string[] = [];
        const weeklyData: number[] = [];
        const currentDay = new Date();
        for (let i = 7; i >= 0; i--) {
            let completedDays = 0;
            const weekStart = new Date(currentDay);
            weekStart.setDate(currentDay.getDate() - currentDay.getDay() - (i * 7)); // Start of week (Sunday)
            
            weeklyLabels.push(`Wk of ${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`);

            let daysInPastCount = 0;
            for (let j = 0; j < 7; j++) {
                const day = new Date(weekStart);
                day.setDate(weekStart.getDate() + j);
                if (day > today) continue; // Don't count future days

                daysInPastCount++;
                const dayStr = toYYYYMMDD(day);
                const log = historyByDate.get(dayStr);
                if (log && isDayCompleted(habit, log)) {
                    completedDays++;
                }
            }
            // Avoid dividing by zero for the current week if it just started
            weeklyData.push(daysInPastCount > 0 ? (completedDays / daysInPastCount) * 100 : 0);
        }
        
        // --- Destroy existing charts before creating new ones ---
        if (dailyChartInstance.current) dailyChartInstance.current.destroy();
        if (weeklyChartInstance.current) weeklyChartInstance.current.destroy();
        
        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#64748B' } }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: '#64748B' },
                    grid: { color: '#E2E8F0' }
                },
                x: {
                    ticks: { color: '#64748B' },
                    grid: { display: false }
                }
            }
        };

        // --- Create Daily Chart ---
        if (dailyChartRef.current) {
            const dailyCtx = dailyChartRef.current.getContext('2d');
            const datasets = [];

            datasets.push({
                type: 'bar',
                label: habit.measurement.type === 'daily' ? 'Completion' : 'Progress',
                data: dailyData,
                backgroundColor: habit.measurement.type === 'daily' 
                    ? dailyData.map(v => v >= 1 ? '#10B981' : '#F8FAFC') // brand-success or bg
                    : '#475569', // brand-primary
                borderColor: habit.measurement.type === 'daily' ? dailyData.map(v => v >= 1 ? '#10B981' : '#CBD5E1') : '#475569',
                borderWidth: 1,
            });

            if (habit.measurement.type !== 'daily') {
                datasets.push({
                    type: 'line',
                    label: 'Goal',
                    data: Array(7).fill(habit.measurement.goal),
                    borderColor: '#F59E0B', // brand-accent
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false,
                    tension: 0.1
                });
            }
            
            dailyChartInstance.current = new Chart(dailyCtx, {
                data: { labels: dailyLabels, datasets },
                options: chartOptions
            });
        }
        
        // --- Create Weekly Chart ---
        if (weeklyChartRef.current) {
            const weeklyCtx = weeklyChartRef.current.getContext('2d');
            weeklyChartInstance.current = new Chart(weeklyCtx, {
                type: 'line',
                data: {
                    labels: weeklyLabels,
                    datasets: [{
                        label: 'Weekly Completion Rate (%)',
                        data: weeklyData,
                        fill: true,
                        backgroundColor: 'rgba(71, 85, 105, 0.2)', // brand-primary with opacity
                        borderColor: '#475569', // brand-primary
                        tension: 0.3
                    }]
                },
                options: {
                    ...chartOptions,
                    scales: {
                        ...chartOptions.scales,
                        y: {
                            ...chartOptions.scales.y,
                            max: 100,
                            ticks: {
                                ...chartOptions.scales.y.ticks,
                                callback: (value: any) => value + '%'
                            }
                        }
                    }
                }
            });
        }

        // --- Cleanup function ---
        return () => {
            if (dailyChartInstance.current) dailyChartInstance.current.destroy();
            if (weeklyChartInstance.current) weeklyChartInstance.current.destroy();
        };

    }, [habit]);

    if (habit.history.length < 1) {
        return (
            <div className="text-center py-8 bg-slate-50 rounded-lg">
                <h3 className="text-lg font-semibold text-brand-text">No Progress Logged Yet</h3>
                <p className="text-brand-text-muted mt-1">Start logging your progress to see your charts here!</p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold text-brand-text mb-3">Last 7 Days Progress</h3>
                <div className="h-64">
                    <canvas ref={dailyChartRef}></canvas>
                </div>
            </div>
             <div>
                <h3 className="text-lg font-semibold text-brand-text mb-3">Weekly Completion Trend</h3>
                 <div className="h-64">
                    <canvas ref={weeklyChartRef}></canvas>
                </div>
            </div>
        </div>
    );
};

export default HabitCharts;