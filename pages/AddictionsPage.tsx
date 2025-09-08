import React from 'react';
import { Link } from 'react-router-dom';
import { AddictionIcon } from '@/components/icons/ModuleIcons';

const AddictionsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full max-w-md mx-auto">
        <AddictionIcon className="h-24 w-24 text-brand-accent mb-6" />
        <h1 className="text-4xl font-bold text-brand-text-primary">Addiction Awareness</h1>
        <p className="mt-4 text-lg text-brand-text-secondary">
            This module is under construction. It will provide resources and self-assessment tools for addiction awareness.
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

export default AddictionsPage;