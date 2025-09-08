import React, { useState, useEffect } from 'react';
import type { Habit } from '@/types';

interface HabitFormProps {
    onSave: (habit: Omit<Habit, 'id' | 'streak' | 'lastCompleted'> | Habit) => void;
    onCancel: () => void;
    initialHabit?: Habit | null;
}

const HabitForm: React.FC<HabitFormProps> = ({ onSave, onCancel, initialHabit }) => {
    const [title, setTitle] = useState('');
    const [isPositive, setIsPositive] = useState(true);
    const [cue, setCue] = useState('');
    const [craving, setCraving] = useState('');
    const [response, setResponse] = useState('');
    const [reward, setReward] = useState('');
    const [reminderTime, setReminderTime] = useState<string>('');

    useEffect(() => {
        if (initialHabit) {
            setTitle(initialHabit.title);
            setIsPositive(initialHabit.isPositive);
            setCue(initialHabit.cue);
            setCraving(initialHabit.craving);
            setResponse(initialHabit.response);
            setReward(initialHabit.reward);
            setReminderTime(initialHabit.reminderTime || '');
        } else {
            setTitle('');
            setIsPositive(true);
            setCue('');
            setCraving('');
            setResponse('');
            setReward('');
            setReminderTime('');
        }
    }, [initialHabit]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) {
            alert('Title is required.');
            return;
        }

        const habitData = {
            title, isPositive, cue, craving, response, reward, reminderTime: reminderTime || null,
        };
        
        if(initialHabit) {
            onSave({ ...initialHabit, ...habitData });
        } else {
             onSave(habitData);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-brand-text-secondary">Habit Title</label>
                <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"/>
            </div>
            
            <div>
                <label className="block text-sm font-medium text-brand-text-secondary">Habit Type</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                    <button type="button" onClick={() => setIsPositive(true)} className={`w-1/2 rounded-l-md px-4 py-2 text-sm font-medium ${isPositive ? 'bg-brand-primary text-white' : 'bg-white hover:bg-gray-50'}`}>
                        Build (Positive)
                    </button>
                    <button type="button" onClick={() => setIsPositive(false)} className={`w-1/2 rounded-r-md px-4 py-2 text-sm font-medium ${!isPositive ? 'bg-red-500 text-white' : 'bg-white hover:bg-gray-50'}`}>
                        Break (Negative)
                    </button>
                </div>
            </div>

            <p className="text-sm text-brand-text-secondary pt-2">Based on the "Atomic Habits" framework, define the following:</p>

            <div>
                <label htmlFor="cue" className="block text-sm font-medium text-brand-text-secondary">1. Cue (Trigger)</label>
                <textarea id="cue" value={cue} onChange={e => setCue(e.target.value)} rows={2} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" placeholder="e.g., After my morning coffee..."></textarea>
            </div>
             <div>
                <label htmlFor="craving" className="block text-sm font-medium text-brand-text-secondary">2. Craving (Motivation)</label>
                <textarea id="craving" value={craving} onChange={e => setCraving(e.target.value)} rows={2} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" placeholder="e.g., I want to feel focused and productive."></textarea>
            </div>
             <div>
                <label htmlFor="response" className="block text-sm font-medium text-brand-text-secondary">3. Response (Action)</label>
                <textarea id="response" value={response} onChange={e => setResponse(e.target.value)} rows={2} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" placeholder="e.g., I will read one page of a book."></textarea>
            </div>
             <div>
                <label htmlFor="reward" className="block text-sm font-medium text-brand-text-secondary">4. Reward (Satisfaction)</label>
                <textarea id="reward" value={reward} onChange={e => setReward(e.target.value)} rows={2} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" placeholder="e.g., I will enjoy the feeling of learning something new."></textarea>
            </div>
            
            <div>
                <label htmlFor="reminder" className="block text-sm font-medium text-brand-text-secondary">Reminder Time (Optional)</label>
                <input type="time" id="reminder" value={reminderTime} onChange={e => setReminderTime(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"/>
                <p className="text-xs text-gray-500 mt-1">Note: Reminders only work if the app is open in a browser tab.</p>
            </div>


            <div className="flex justify-end space-x-4 pt-4">
                <button type="button" onClick={onCancel} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-brand-primary border border-transparent rounded-md shadow-sm hover:opacity-90">{initialHabit ? 'Save Changes' : 'Add Habit'}</button>
            </div>
        </form>
    );
};

export default HabitForm;