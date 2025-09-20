import React, { useState, useCallback } from 'react';
// FIX: Using TargetIcon as HabitIcon as it is not an exported member of ModuleIcons.
import { TargetIcon as HabitIcon } from '@/components/icons/ModuleIcons';
import { useHabits } from '@/hooks/useHabits';
import Modal from '@/components/Modal';
import HabitForm from '@/components/HabitForm';
import HabitListItem from '@/components/HabitListItem';
import HabitDetailModal from '@/components/HabitDetailModal';
import LogProgressModal from '@/components/LogProgressModal';
import Sparks from '@/components/Sparks';
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
    const { habits, addHabit, updateHabit, deleteHabit, logHabit } = useHabits();
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [editingHabit, setEditingHabit] = useState<Habit | null>(null);
    const [viewingHabit, setViewingHabit] = useState<Habit | null>(null);
    const [loggingHabit, setLoggingHabit] = useState<Habit | null>(null);
    const [showSparks, setShowSparks] = useState(false);

    const handleOpenAddModal = () => {
        setEditingHabit(null);
        setIsFormModalOpen(true);
    };

    const handleOpenEditModal = (habit: Habit) => {
        setEditingHabit(habit);
        setIsFormModalOpen(true);
    };

    const handleSaveHabit = useCallback(async (habitData: Omit<Habit, 'id' | 'history'> | Habit) => {
        const isNew = !('id' in habitData);
        if (isNew) {
            addHabit(habitData as Omit<Habit, 'id' | 'history'>);
        } else {
            updateHabit(habitData as Habit);
        }
        
        if (habitData.reminderTime) {
            const hasPermission = await requestNotificationPermission();
            if (hasPermission) {
                scheduleNotification(habitData as Habit);
            }
        }

        setIsFormModalOpen(false);
        setEditingHabit(null);
    }, [addHabit, updateHabit]);
    
    const handleDeleteHabit = useCallback((id: string) => {
        if(window.confirm("Are you sure you want to delete this habit? This action cannot be undone.")) {
            deleteHabit(id);
        }
    }, [deleteHabit]);

    const handleViewDetails = (habit: Habit) => {
        setViewingHabit(habit);
    };
    
    const handleLogProgress = (value: number) => {
        if (loggingHabit) {
            logHabit(loggingHabit.id, value);
            
            // Check if goal was met to trigger sparks
            const measurement = loggingHabit.measurement;
            let goalMet = false;
            if (measurement.type === 'daily') {
                goalMet = value >= 1;
            } else {
                goalMet = value >= measurement.goal;
            }

            if (goalMet) {
                setShowSparks(true);
                setTimeout(() => setShowSparks(false), 2500); // Hide sparks after animation
            }
        }
        setLoggingHabit(null);
    };

    return (
        <div className="max-w-4xl mx-auto">
            {showSparks && <Sparks />}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="text-left">
                    <h1 className="text-3xl font-bold text-brand-text">Habits Tracker</h1>
                    <p className="mt-2 text-lg text-brand-text-muted">
                        Build good habits and break bad ones. All data is stored on your device.
                    </p>
                </div>
                <button
                    onClick={handleOpenAddModal}
                    className="w-full sm:w-auto bg-brand-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-primary/90 transition-opacity flex-shrink-0"
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
                            onDelete={handleDeleteHabit} 
                            onEdit={handleOpenEditModal}
                            onViewDetails={handleViewDetails}
                            onInitiateLog={setLoggingHabit}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 px-6 bg-brand-surface rounded-lg shadow-sm border border-slate-200">
                    <HabitIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
                    <h2 className="text-xl font-semibold text-brand-text">No habits yet!</h2>
                    <p className="text-brand-text-muted mt-2">Click "Add New Habit" to get started on your journey.</p>
                </div>
            )}
            
            <Modal isOpen={isFormModalOpen} onClose={() => setIsFormModalOpen(false)} title={editingHabit ? "Edit Habit" : "Add a New Habit"}>
                <HabitForm 
                    key={editingHabit ? editingHabit.id : 'new'}
                    onSave={handleSaveHabit}
                    onCancel={() => setIsFormModalOpen(false)}
                    initialHabit={editingHabit}
                />
            </Modal>
            
            {viewingHabit && (
                <HabitDetailModal
                    habit={viewingHabit}
                    isOpen={!!viewingHabit}
                    onClose={() => setViewingHabit(null)}
                />
            )}
            
            {loggingHabit && (
                <LogProgressModal
                    habit={loggingHabit}
                    isOpen={!!loggingHabit}
                    onClose={() => setLoggingHabit(null)}
                    onLog={handleLogProgress}
                />
            )}
        </div>
    );
};

export default HabitsPage;