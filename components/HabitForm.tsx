import React, { useState, useEffect } from 'react';
import type { Habit, HabitMeasurement, MeasurementType } from '@/types';

interface HabitFormProps {
    onSave: (habit: Omit<Habit, 'id' | 'history'> | Habit) => void;
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
    
    // State for the new measurement fields
    const [measurementType, setMeasurementType] = useState<MeasurementType>('daily');
    const [goal, setGoal] = useState<number>(1);
    const [unit, setUnit] = useState<string>('');


    useEffect(() => {
        if (initialHabit) {
            setTitle(initialHabit.title);
            setIsPositive(initialHabit.isPositive);
            setCue(initialHabit.cue);
            setCraving(initialHabit.craving);
            setResponse(initialHabit.response);
            setReward(initialHabit.reward);
            setReminderTime(initialHabit.reminderTime || '');
            setMeasurementType(initialHabit.measurement.type);
            if (initialHabit.measurement.type !== 'daily') {
                setGoal(initialHabit.measurement.goal);
            }
            if (initialHabit.measurement.type === 'duration') {
                setUnit(initialHabit.measurement.unit);
            }
            if (initialHabit.measurement.type === 'count') {
                setUnit(initialHabit.measurement.unit);
            }

        } else {
            // Reset form for new habit
            setTitle('');
            setIsPositive(true);
            setCue('');
            setCraving('');
            setResponse('');
            setReward('');
            setReminderTime('');
            setMeasurementType('daily');
            setGoal(1);
            setUnit('');
        }
    }, [initialHabit]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) {
            alert('Title is required.');
            return;
        }

        let measurement: HabitMeasurement;
        switch(measurementType) {
            case 'reps':
                measurement = { type: 'reps', goal: goal > 0 ? goal : 1 };
                break;
            case 'duration':
                measurement = { type: 'duration', goal: goal > 0 ? goal : 1, unit: unit === 'hours' ? 'hours' : 'minutes' };
                break;
            case 'count':
                measurement = { type: 'count', goal: goal > 0 ? goal : 1, unit: unit || 'times' };
                break;
            default:
                measurement = { type: 'daily' };
        }

        const habitData = {
            title, isPositive, cue, craving, response, reward, reminderTime: reminderTime || null, measurement
        };
        
        if(initialHabit) {
            onSave({ ...initialHabit, ...habitData });
        } else {
             onSave(habitData as Omit<Habit, 'id'|'history'>);
        }
    };
    
    const renderMeasurementInputs = () => {
        switch (measurementType) {
            case 'reps':
                return (
                    <div>
                        <label htmlFor="goal" className="block text-sm font-medium text-brand-text-secondary">Goal Repetitions</label>
                        <input type="number" id="goal" value={goal} onChange={e => setGoal(Number(e.target.value))} min="1" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white text-brand-text-primary"/>
                    </div>
                );
            case 'duration':
                return (
                    <div className="flex gap-4">
                        <div className="flex-grow">
                            <label htmlFor="goal" className="block text-sm font-medium text-brand-text-secondary">Goal Duration</label>
                            <input type="number" id="goal" value={goal} onChange={e => setGoal(Number(e.target.value))} min="1" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white text-brand-text-primary"/>
                        </div>
                        <div>
                             <label htmlFor="unit" className="block text-sm font-medium text-brand-text-secondary">Unit</label>
                             <select id="unit" value={unit} onChange={e => setUnit(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white text-brand-text-primary">
                                <option value="minutes">Minutes</option>
                                <option value="hours">Hours</option>
                             </select>
                        </div>
                    </div>
                );
            case 'count':
                 return (
                    <div className="flex gap-4">
                        <div className="flex-grow">
                            <label htmlFor="goal" className="block text-sm font-medium text-brand-text-secondary">Goal Count</label>
                            <input type="number" id="goal" value={goal} onChange={e => setGoal(Number(e.target.value))} min="1" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white text-brand-text-primary"/>
                        </div>
                        <div>
                             <label htmlFor="unit-name" className="block text-sm font-medium text-brand-text-secondary">Unit Name</label>
                             <input type="text" id="unit-name" value={unit} onChange={e => setUnit(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white text-brand-text-primary" placeholder="e.g., pages"/>
                        </div>
                    </div>
                );
            case 'daily':
            default:
                return <p className="text-sm text-gray-500">This is a simple daily habit. Mark it as done each day.</p>;
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-brand-text-secondary">Habit Title</label>
                <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white text-brand-text-primary"/>
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
            
            <div className="border-t pt-4">
                 <label htmlFor="measurement-type" className="block text-sm font-medium text-brand-text-secondary">How will you measure this habit?</label>
                 <select id="measurement-type" value={measurementType} onChange={e => setMeasurementType(e.target.value as MeasurementType)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white text-brand-text-primary">
                    <option value="daily">Daily Task (Done / Not Done)</option>
                    <option value="reps">Repetitions (e.g., push-ups)</option>
                    <option value="duration">Duration (Time-based)</option>
                    <option value="count">Count (e.g., pages read)</option>
                 </select>
            </div>
            
            <div>{renderMeasurementInputs()}</div>

            <p className="text-sm text-brand-text-secondary pt-2">Optionally, define the "Atomic Habits" framework:</p>

            <div>
                <label htmlFor="cue" className="block text-sm font-medium text-brand-text-secondary">1. Cue (Trigger)</label>
                <textarea id="cue" value={cue} onChange={e => setCue(e.target.value)} rows={2} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white text-brand-text-primary placeholder-gray-400" placeholder="e.g., After my morning coffee..."></textarea>
            </div>
             <div>
                <label htmlFor="craving" className="block text-sm font-medium text-brand-text-secondary">2. Craving (Motivation)</label>
                <textarea id="craving" value={craving} onChange={e => setCraving(e.target.value)} rows={2} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white text-brand-text-primary placeholder-gray-400" placeholder="e.g., I want to feel focused and productive."></textarea>
            </div>
             <div>
                <label htmlFor="response" className="block text-sm font-medium text-brand-text-secondary">3. Response (Action)</label>
                <textarea id="response" value={response} onChange={e => setResponse(e.target.value)} rows={2} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white text-brand-text-primary placeholder-gray-400" placeholder="e.g., I will read one page of a book."></textarea>
            </div>
             <div>
                <label htmlFor="reward" className="block text-sm font-medium text-brand-text-secondary">4. Reward (Satisfaction)</label>
                <textarea id="reward" value={reward} onChange={e => setReward(e.target.value)} rows={2} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white text-brand-text-primary placeholder-gray-400" placeholder="e.g., I will enjoy the feeling of learning something new."></textarea>
            </div>
            
            <div>
                <label htmlFor="reminder" className="block text-sm font-medium text-brand-text-secondary">Reminder Time (Optional)</label>
                <input type="time" id="reminder" value={reminderTime} onChange={e => setReminderTime(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white text-brand-text-primary"/>
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