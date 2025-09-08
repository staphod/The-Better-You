import React, { useState } from 'react';
import type { Habit } from '@/types';
import { useHabitStats } from '@/hooks/useHabitStats';
import DropdownMenu from '@/components/DropdownMenu';
import { TrashIcon, EditIcon, TrendingUpIcon, MoreVerticalIcon, CheckCircleIcon } from '@/components/icons/StatusIcons';

interface HabitListItemProps {
    habit: Habit;
    onLogHabit: (id: string, status: 'completed' | 'missed') => void;
    onDelete: (id: string) => void;
    onEdit: (habit: Habit) => void;
    onViewDetails: (habit: Habit) => void;
}

const HabitListItem: React.FC<HabitListItemProps> = ({ habit, onLogHabit, onDelete, onEdit, onViewDetails }) => {
    const { streak, completionStatusForToday } = useHabitStats(habit);

    const getButtonStyle = (status: 'completed' | 'missed') => {
        if (completionStatusForToday === status) {
            return status === 'completed' 
                ? 'bg-green-500 text-white' 
                : 'bg-red-500 text-white';
        }
        return 'bg-gray-200 hover:bg-gray-300';
    };

    return (
        <div className="bg-brand-surface p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between gap-4">
                <div 
                    className="flex-grow cursor-pointer"
                    onClick={() => onViewDetails(habit)}
                >
                    <p className="font-bold text-lg text-brand-text-primary">{habit.title}</p>
                    <div className="flex items-center text-sm text-brand-text-secondary">
                        <TrendingUpIcon className="h-4 w-4 mr-1 text-brand-accent"/>
                        Current Streak: <span className="font-semibold text-brand-accent ml-1">{streak} days</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                    <DropdownMenu
                        trigger={<button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"><MoreVerticalIcon className="h-5 w-5"/></button>}
                    >
                        <button onClick={() => onEdit(habit)} className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100">
                            <EditIcon className="h-4 w-4 mr-2" /> Edit
                        </button>
                        <button onClick={() => onDelete(habit.id)} className="flex items-center w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50">
                            <TrashIcon className="h-4 w-4 mr-2" /> Delete
                        </button>
                    </DropdownMenu>
                </div>
            </div>
            
            <div className="mt-4 flex items-center gap-2">
                <button
                    onClick={() => onLogHabit(habit.id, 'completed')}
                    className={`w-full text-sm font-medium py-2 px-3 rounded-md flex items-center justify-center gap-2 transition-colors ${getButtonStyle('completed')}`}
                >
                    <CheckCircleIcon className="h-5 w-5"/>
                    Done
                </button>
                <button
                    onClick={() => onLogHabit(habit.id, 'missed')}
                    className={`w-full text-sm font-medium py-2 px-3 rounded-md flex items-center justify-center gap-2 transition-colors ${getButtonStyle('missed')}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Not Done
                </button>
            </div>
        </div>
    );
};

export default HabitListItem;
