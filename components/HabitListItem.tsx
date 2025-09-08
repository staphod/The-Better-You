import React from 'react';
import type { Habit } from '@/types';
import { useHabitStats } from '@/hooks/useHabitStats';
import DropdownMenu from '@/components/DropdownMenu';
import { TrashIcon, EditIcon, TrendingUpIcon, MoreVerticalIcon, PlusCircleIcon } from '@/components/icons/StatusIcons';

interface HabitListItemProps {
    habit: Habit;
    onDelete: (id: string) => void;
    onEdit: (habit: Habit) => void;
    onViewDetails: (habit: Habit) => void;
    onInitiateLog: (habit: Habit) => void;
}

const getGoalString = (habit: Habit): string => {
    switch(habit.measurement.type) {
        case 'daily': return "Complete daily";
        case 'reps': return `Goal: ${habit.measurement.goal} reps`;
        case 'duration': return `Goal: ${habit.measurement.goal} ${habit.measurement.unit}`;
        case 'count': return `Goal: ${habit.measurement.goal} ${habit.measurement.unit}`;
        default: return "";
    }
}

const HabitListItem: React.FC<HabitListItemProps> = ({ habit, onDelete, onEdit, onViewDetails, onInitiateLog }) => {
    const { streak, isCompletedToday, completionValueForToday } = useHabitStats(habit);

    const goalString = getGoalString(habit);
    let todayProgressString = "Not logged today";
    if(completionValueForToday !== null) {
        if (habit.measurement.type === 'daily') {
            todayProgressString = completionValueForToday >= 1 ? "Completed today" : "Missed today";
        // FIX: Replaced redundant `else if` with `else` to handle all non-daily habit types, which resolves the type overlap error.
        } else {
             todayProgressString = `Logged: ${completionValueForToday} / ${habit.measurement.goal}`;
        }
    }
    
    return (
        <div className={`bg-brand-surface p-4 rounded-lg shadow-sm border ${isCompletedToday ? 'border-green-300' : 'border-gray-200'}`}>
            <div className="flex items-start justify-between gap-4">
                <div 
                    className="flex-grow cursor-pointer"
                    onClick={() => onViewDetails(habit)}
                >
                    <p className="font-bold text-lg text-brand-text-primary">{habit.title}</p>
                    <div className="flex items-center text-sm text-brand-text-secondary mt-1">
                        <TrendingUpIcon className="h-4 w-4 mr-1 text-brand-accent"/>
                        Streak: <span className="font-semibold text-brand-accent ml-1">{streak} days</span>
                    </div>
                     <div className="text-sm text-brand-text-secondary">
                        {goalString}
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
            
            <div className="mt-3 flex items-center justify-between gap-2 bg-gray-50 p-2 rounded-md">
                <span className={`text-sm font-medium ${isCompletedToday ? 'text-green-600' : 'text-gray-600'}`}>
                    {todayProgressString}
                </span>
                <button
                    onClick={() => onInitiateLog(habit)}
                    className="text-sm font-medium py-2 px-3 rounded-md flex items-center justify-center gap-2 transition-colors bg-brand-secondary text-white hover:opacity-90"
                >
                    <PlusCircleIcon className="h-5 w-5"/>
                    Log Progress
                </button>
            </div>
        </div>
    );
};

export default HabitListItem;