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
    Health: 'bg-emerald-50 text-emerald-700',
    Learning: 'bg-blue-50 text-blue-700',
    Mindfulness: 'bg-violet-50 text-violet-700',
    Fitness: 'bg-amber-50 text-amber-700',
    Productivity: 'bg-indigo-50 text-indigo-700',
    Social: 'bg-pink-50 text-pink-700',
    Finance: 'bg-yellow-50 text-yellow-700',
    Other: 'bg-slate-50 text-slate-700',
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
        <div className={`bg-brand-surface p-4 rounded-lg shadow-sm border ${isCompletedToday ? 'border-brand-success' : 'border-slate-200'}`}>
            <div className="flex items-start justify-between gap-4">
                <div 
                    className="flex-grow cursor-pointer"
                    onClick={() => onViewDetails(habit)}
                >
                    <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-bold text-lg text-brand-text">{habit.title}</p>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[category]}`}>
                            {category}
                        </span>
                    </div>
                    <div className="flex items-center text-sm text-brand-text-muted mt-1">
                        <TrendingUpIcon className="h-4 w-4 mr-1 text-brand-accent"/>
                        Streak: <span className="font-semibold text-brand-text ml-1">{streak} days</span>
                    </div>
                     <div className="text-sm text-brand-text-muted">
                        {goalString}
                    </div>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                    <DropdownMenu
                        trigger={<button className="p-2 text-brand-text-muted hover:bg-slate-100 rounded-full transition-colors"><MoreVerticalIcon className="h-5 w-5"/></button>}
                    >
                        <button onClick={() => onEdit(habit)} className="flex items-center w-full px-4 py-2 text-sm text-left text-brand-text hover:bg-slate-100">
                            <EditIcon className="h-4 w-4 mr-2" /> Edit
                        </button>
                        <button onClick={() => onDelete(habit.id)} className="flex items-center w-full px-4 py-2 text-sm text-left text-brand-danger hover:bg-red-50">
                            <TrashIcon className="h-4 w-4 mr-2" /> Delete
                        </button>
                    </DropdownMenu>
                </div>
            </div>
            
            <div className="mt-3 flex items-center justify-between gap-2 bg-slate-50 p-2 rounded-md">
                <span className={`text-sm font-medium ${isCompletedToday ? 'text-brand-success' : 'text-brand-text-muted'}`}>
                    {todayProgressString}
                </span>
                <button
                    onClick={() => onInitiateLog(habit)}
                    className="text-sm font-medium py-2 px-3 rounded-md flex items-center justify-center gap-2 transition-colors bg-brand-primary text-white hover:bg-brand-primary/90"
                >
                    <PlusCircleIcon className="h-5 w-5"/>
                    Log Progress
                </button>
            </div>
        </div>
    );
};

export default HabitListItem;