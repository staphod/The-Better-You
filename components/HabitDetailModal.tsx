import React from 'react';
import type { Habit } from '@/types';
import Modal from '@/components/Modal';
import { useHabitStats } from '@/hooks/useHabitStats';
import { TrendingUpIcon, TrendingDownIcon } from '@/components/icons/StatusIcons';

interface HabitDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  habit: Habit;
}

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string | number; color: string }> = ({ icon, label, value, color }) => (
    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
        <div className={`mr-4 p-2 rounded-full ${color}`}>
            {icon}
        </div>
        <div>
            <p className="text-sm font-medium text-gray-500">{label}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
);

const DetailRow: React.FC<{label: string, value: string | React.ReactNode}> = ({label, value}) => (
    <div>
        <h4 className="text-sm font-semibold text-brand-text-secondary uppercase tracking-wider">{label}</h4>
        <p className="text-brand-text-primary mt-1">{value || '-'}</p>
    </div>
);

const getGoalString = (habit: Habit): string => {
    switch(habit.measurement.type) {
        case 'daily': return "Complete once per day";
        case 'reps': return `${habit.measurement.goal} reps`;
        case 'duration': return `${habit.measurement.goal} ${habit.measurement.unit}`;
        case 'count': return `${habit.measurement.goal} ${habit.measurement.unit}`;
        default: return "N/A";
    }
}


const HabitDetailModal: React.FC<HabitDetailModalProps> = ({ isOpen, onClose, habit }) => {
  const { streak, failures } = useHabitStats(habit);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={habit.title}>
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <StatCard 
                    icon={<TrendingUpIcon className="h-6 w-6 text-white"/>}
                    label="Current Streak"
                    value={`${streak} days`}
                    color="bg-green-500"
               />
               <StatCard 
                    icon={<TrendingDownIcon className="h-6 w-6 text-white"/>}
                    label="Total Failures"
                    value={failures}
                    color="bg-red-500"
               />
            </div>
            <div className="border-t pt-6 space-y-4">
                <DetailRow label="Goal" value={<span className="font-bold text-brand-primary">{getGoalString(habit)}</span>} />
                <DetailRow label="1. Cue (Trigger)" value={habit.cue} />
                <DetailRow label="2. Craving (Motivation)" value={habit.craving} />
                <DetailRow label="3. Response (Action)" value={habit.response} />
                <DetailRow label="4. Reward (Satisfaction)" value={habit.reward} />
            </div>
             <div className="flex justify-end pt-2">
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-white bg-brand-primary border border-transparent rounded-md shadow-sm hover:opacity-90"
                >
                    Close
                </button>
            </div>
        </div>
    </Modal>
  );
};

export default HabitDetailModal;