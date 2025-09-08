import React, { useState, useCallback } from 'react';
import { HabitIcon } from '@/components/icons/ModuleIcons';
import { useHabits } from '@/hooks/useHabits';
import Modal from '@/components/Modal';
import HabitForm from '@/components/HabitForm';
import HabitListItem from '@/components/HabitListItem';
import type { Habit } from '@/types';

const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
        alert('This browser does not support desktop notifications.');
        return false;
    }
    const permission = await Notification.requestPermission();
    return permission === 'granted';
};

const scheduleNotification = (habit: Habit) => {
    if (!habit.reminderTime) return;

    const [hours, minutes] = habit.reminderTime.split(':').map(Number);
    const now = new Date();
    const reminderDate = new Date();
    reminderDate.setHours(hours, minutes, 0, 0);

    if (reminderDate <= now) {
        return; 
    }
    
    const delay = reminderDate.getTime() - now.getTime();

    setTimeout(() => {
        new Notification('Habit Reminder', {
            body: `Don't forget your habit: ${habit.title}!`,
            icon: '/vite.svg', // A default icon
        });
    }, delay);
};

const HabitsPage: React.FC = () => {
    const { habits, addHabit, updateHabit, deleteHabit, completeHabit } = useHabits();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingHabit, setEditingHabit] = useState<Habit | null>(null);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [habitToComplete, setHabitToComplete] = useState<Habit | null>(null);

    const handleOpenAddModal = () => {
        setEditingHabit(null);
        setIsModalOpen(true);
    };

    const handleOpenEditModal = (habit: Habit) => {
        setEditingHabit(habit);
        setIsModalOpen(true);
    };

    const handleSaveHabit = useCallback(async (habitData: Omit<Habit, 'id' | 'streak' | 'lastCompleted'> | Habit) => {
        const isNew = !('id' in habitData);
        if (isNew) {
            addHabit(habitData);
        } else {
            updateHabit(habitData);
        }
        
        if (habitData.reminderTime) {
            const hasPermission = await requestNotificationPermission();
            if (hasPermission) {
                scheduleNotification(habitData as Habit);
            }
        }

        setIsModalOpen(false);
        setEditingHabit(null);
    }, [addHabit, updateHabit]);
    
    const handleDeleteHabit = useCallback((id: string) => {
        if(window.confirm("Are you sure you want to delete this habit?")) {
            deleteHabit(id);
        }
    }, [deleteHabit]);

    const handleInitiateComplete = (habit: Habit) => {
        setHabitToComplete(habit);
        setIsConfirmModalOpen(true);
    };
    
    const handleConfirmComplete = () => {
        if (habitToComplete) {
            completeHabit(habitToComplete.id);
        }
        setHabitToComplete(null);
        setIsConfirmModalOpen(false);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="text-left">
                    <h1 className="text-3xl font-bold text-brand-text-primary">Habits Tracker</h1>
                    <p className="mt-2 text-lg text-brand-text-secondary">
                        Build good habits and break bad ones. All data is stored on your device.
                    </p>
                </div>
                <button
                    onClick={handleOpenAddModal}
                    className="w-full sm:w-auto bg-brand-primary text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex-shrink-0"
                >
                    + Add New Habit
                </button>
            </div>

            {habits.length > 0 ? (
                <div className="space-y-4">
                    {habits.map(habit => (
                        <HabitListItem 
                            key={habit.id} 
                            habit={habit} 
                            onInitiateComplete={handleInitiateComplete} 
                            onDelete={handleDeleteHabit} 
                            onEdit={handleOpenEditModal}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 px-6 bg-brand-surface rounded-lg shadow-sm">
                    <HabitIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
                    <h2 className="text-xl font-semibold text-brand-text-primary">No habits yet!</h2>
                    <p className="text-brand-text-secondary mt-2">Click "Add New Habit" to get started on your journey.</p>
                </div>
            )}
            
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingHabit ? "Edit Habit" : "Add a New Habit"}>
                <HabitForm 
                    key={editingHabit ? editingHabit.id : 'new'}
                    onSave={handleSaveHabit}
                    onCancel={() => setIsModalOpen(false)}
                    initialHabit={editingHabit}
                />
            </Modal>

            <Modal 
                isOpen={isConfirmModalOpen} 
                onClose={() => setIsConfirmModalOpen(false)} 
                title="Confirm Completion"
            >
                <div className="text-center">
                    <p className="text-brand-text-secondary mb-6">
                        Are you sure you want to mark "{habitToComplete?.title}" as complete for today?
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button 
                            onClick={() => setIsConfirmModalOpen(false)} 
                            className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={handleConfirmComplete}
                            className="px-6 py-2 text-sm font-medium text-white bg-brand-secondary border border-transparent rounded-md shadow-sm hover:opacity-90"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default HabitsPage;