import React, { useState } from 'react';
import type { Habit } from '@/types';
import Modal from '@/components/Modal';

interface LogProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  habit: Habit;
  onLog: (value: number) => void;
}

const getGoalString = (habit: Habit): string => {
    switch(habit.measurement.type) {
        case 'daily': return "Complete the task for today.";
        case 'reps': return `Goal: ${habit.measurement.goal} reps`;
        case 'duration': return `Goal: ${habit.measurement.goal} ${habit.measurement.unit}`;
        case 'count': return `Goal: ${habit.measurement.goal} ${habit.measurement.unit}`;
        default: return "";
    }
}

const getUnitLabel = (habit: Habit): string => {
    switch(habit.measurement.type) {
        case 'reps': return 'reps';
        case 'duration': return habit.measurement.unit;
        case 'count': return habit.measurement.unit;
        default: return "";
    }
}

const LogProgressModal: React.FC<LogProgressModalProps> = ({ isOpen, onClose, habit, onLog }) => {
  const [value, setValue] = useState<string>('');

  const handleSave = () => {
    const numericValue = Number(value);
    if (!isNaN(numericValue)) {
      onLog(numericValue);
    }
  };
  
  const handleMissed = () => {
      onLog(0);
  }
  
  const handleCompleteDaily = () => {
      onLog(1);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Log Progress: ${habit.title}`}>
        <div className="space-y-4">
            <p className="text-brand-text-muted">{getGoalString(habit)}</p>
            
            {habit.measurement.type !== 'daily' ? (
                <div>
                    <label htmlFor="progress-value" className="block text-sm font-medium text-brand-text-muted">
                        How much did you complete today? ({getUnitLabel(habit)})
                    </label>
                    <input 
                        type="number" 
                        id="progress-value" 
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={`Enter ${getUnitLabel(habit)}`}
                        className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white text-brand-text"
                        autoFocus
                    />
                </div>
            ) : (
                 <div className="bg-slate-50 p-4 rounded-md text-center">
                    <p className="font-medium text-brand-text">Did you complete this habit today?</p>
                 </div>
            )}
            
             <div className="flex flex-col sm:flex-row justify-end items-center gap-3 pt-4">
                 {habit.measurement.type !== 'daily' ? (
                    <>
                        <button onClick={handleMissed} className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-brand-danger bg-red-50 border border-transparent rounded-md hover:bg-red-100">
                           I Missed Today
                        </button>
                        <button onClick={handleSave} disabled={value === ''} className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-brand-primary border border-transparent rounded-md shadow-sm hover:bg-brand-primary/90 disabled:opacity-50">
                            Save Log
                        </button>
                    </>
                 ) : (
                    <>
                        <button onClick={handleMissed} className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-brand-text bg-white border border-slate-300 rounded-md shadow-sm hover:bg-slate-50">
                           Not Done
                        </button>
                        <button onClick={handleCompleteDaily} className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-brand-primary border border-transparent rounded-md shadow-sm hover:bg-brand-primary/90">
                            Done
                        </button>
                    </>
                 )}
            </div>
        </div>
    </Modal>
  );
};

export default LogProgressModal;