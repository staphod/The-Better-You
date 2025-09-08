
import React from 'react';
import { Link } from 'react-router-dom';
import { HabitIcon } from '../components/icons/ModuleIcons';

const HabitsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full max-w-md mx-auto">
        <HabitIcon className="h-24 w-24 text-brand-accent mb-6" />
        <h1 className="text-4xl font-bold text-brand-text-primary">Habits Tracker</h1>
        <p className="mt-4 text-lg text-brand-text-secondary">
            This module is under construction. Soon, you'll be able to build and track habits completely offline.
        </p>
        <Link 
            to="/" 
            className="mt-8 bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
        >
            Back to Home
        </Link>
    </div>
  );
};

export default HabitsPage;
