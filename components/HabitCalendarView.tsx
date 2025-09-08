import React, { useState, useMemo } from 'react';
import type { Habit } from '@/types';
import { toYYYYMMDD, isDayCompleted } from '@/hooks/useHabitStats';

interface HabitCalendarViewProps {
    habit: Habit;
}

const HabitCalendarView: React.FC<HabitCalendarViewProps> = ({ habit }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const historyByDate = useMemo(() => new Map(habit.history.map(log => [log.date, log])), [habit.history]);

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const today = new Date();
        const todayStr = toYYYYMMDD(today);

        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const startingDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.

        const calendarDays = [];

        // Add empty cells for padding before the 1st day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="p-1"></div>);
        }

        // Add cells for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dateStr = toYYYYMMDD(date);
            const log = historyByDate.get(dateStr);
            
            let statusClass = 'bg-gray-100 hover:bg-gray-200';
            if (log) {
                statusClass = isDayCompleted(habit, log) ? 'bg-green-300' : 'bg-red-200';
            }
            
            const isToday = dateStr === todayStr;

            calendarDays.push(
                <div key={day} className={`flex items-center justify-center h-10 w-10 rounded-full text-sm transition-colors ${statusClass} ${isToday ? 'ring-2 ring-brand-primary' : ''}`}>
                    {day}
                </div>
            );
        }

        return calendarDays;
    };
    
    return (
        <div className="bg-brand-surface p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <button onClick={goToPreviousMonth} className="p-2 rounded-full hover:bg-gray-100" aria-label="Previous month">
                    &lt;
                </button>
                <h3 className="font-semibold text-brand-text-primary">
                    {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h3>
                <button onClick={goToNextMonth} className="p-2 rounded-full hover:bg-gray-100" aria-label="Next month">
                    &gt;
                </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs text-brand-text-secondary mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day}>{day}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-brand-text-primary">
                {renderCalendar()}
            </div>
             <div className="flex justify-center items-center space-x-4 mt-4 text-xs text-brand-text-secondary">
                <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-green-300 mr-1.5"></span>Completed</div>
                <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-red-200 mr-1.5"></span>Missed</div>
                <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-gray-100 mr-1.5"></span>No Data</div>
            </div>
        </div>
    );
};

export default HabitCalendarView;