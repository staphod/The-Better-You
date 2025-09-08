import React, { useState } from 'react';
import type { Habit } from '@/types';
import { CheckCircleIcon, ClipboardIcon, TrashIcon, EditIcon } from '@/components/icons/StatusIcons';

interface HabitListItemProps {
    habit: Habit;
    onInitiateComplete: (habit: Habit) => void;
    onDelete: (id: string) => void;
    onEdit: (habit: Habit) => void;
}

const HabitListItem: React.FC<HabitListItemProps> = ({ habit, onInitiateComplete, onDelete, onEdit }) => {
    const [copied, setCopied] = useState(false);
    const todayStr = new Date().toISOString().split('T')[0];
    const isCompletedToday = habit.lastCompleted === todayStr;

    const handleCopy = () => {
        const summary = `
Habit: ${habit.title} (${habit.isPositive ? 'Build' : 'Break'})
Streak: ${habit.streak} days
---
1. Cue: ${habit.cue}
2. Craving: ${habit.craving}
3. Response: ${habit.response}
4. Reward: ${habit.reward}
        `.trim();
        navigator.clipboard.writeText(summary).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="bg-brand-surface p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-grow">
                <p className="font-bold text-lg text-brand-text-primary">{habit.title}</p>
                <p className="text-sm text-brand-text-secondary">
                    Current Streak: <span className="font-semibold text-brand-accent">{habit.streak} days</span>
                </p>
            </div>
            <div className="flex items-center space-x-2 flex-shrink-0 w-full sm:w-auto">
                <button
                    onClick={() => onInitiateComplete(habit)}
                    disabled={isCompletedToday}
                    className={`w-full sm:w-auto flex-grow justify-center px-3 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-colors ${
                        isCompletedToday 
                        ? 'bg-green-500 text-white cursor-default' 
                        : 'bg-brand-secondary text-white hover:opacity-90'
                    }`}
                >
                    {isCompletedToday ? <CheckCircleIcon className="h-5 w-5" /> : null}
                    {isCompletedToday ? 'Done!' : 'Complete Today'}
                </button>
                <button onClick={() => onEdit(habit)} title="Edit Habit" className="p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors">
                    <EditIcon className="h-5 w-5" />
                </button>
                <button onClick={handleCopy} title="Copy Summary" className="p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors">
                    {copied ? <CheckCircleIcon className="h-5 w-5 text-green-500" /> : <ClipboardIcon className="h-5 w-5" />}
                </button>
                 <button onClick={() => onDelete(habit.id)} title="Delete Habit" className="p-2 text-gray-500 hover:bg-red-100 hover:text-red-600 rounded-md transition-colors">
                    <TrashIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default HabitListItem;