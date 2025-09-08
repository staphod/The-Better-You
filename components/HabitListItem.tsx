import React from 'react';
import type { Habit, HabitCategory } from '@/types';
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

const categoryColors: Record<HabitCategory, string> = {
    Health: 'bg-green-100 text-green-800',
    Learning: 'bg-blue-100 text-blue-800',
    Mindfulness: 'bg-purple-100 text-purple-800',
    Fitness: 'bg-orange-100 text-orange-800',
    Productivity: 'bg-indigo-100 text-indigo-800',
    Social: 'bg-pink-100 text-pink-800',
    Finance: 'bg-yellow-100 text-yellow-800',
    Other: 'bg-gray-100 text-gray-800',
};

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

    if (completionValueForToday !== null) {
        const { measurement } = habit;
        if (measurement.type === 'daily') {
            todayProgressString = completionValueForToday >= 1 ? "Completed today" : "Missed today";
        } else {
            // TypeScript knows `measurement` is not 'daily' here, so it must have a 'goal'.
            todayProgressString = `Logged: ${completionValueForToday} / ${measurement.goal}`;
        }
    }
    
    const category = habit.category || 'Other';
    
    return (
        <div className={`bg-brand-surface p-4 rounded-lg shadow-sm border ${isCompletedToday ? 'border-green-300' : 'border-gray-200'}`}>
            <div className="flex items-start justify-between gap-4">
                <div 
                    className="flex-grow cursor-pointer"
                    onClick={() => onViewDetails(habit)}
                >
                    <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-bold text-lg text-brand-text-primary">{habit.title}</p>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[category]}`}>
                            {category}
                        </span>
                    </div>
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