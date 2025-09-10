import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ToolsIcon } from '@/components/icons/ModuleIcons';

const ToolsStrategiesPage: React.FC = () => {
  const { Link } = ReactRouterDom;
  return (
    <div className="flex flex-col items-center justify-center text-center h-full max-w-md mx-auto">
        <ToolsIcon className="h-24 w-24 text-brand-accent mb-6" />
        <h1 className="text-4xl font-bold text-brand-text-primary">Tools and Strategies</h1>
        <p className="mt-4 text-lg text-brand-text-secondary">
            This module is under construction. Soon you will find practical tools and strategies for self-improvement and better decision-making.
        </p>
        <div className="mt-8 flex gap-4">
            <Link 
                to="/tools" 
                className="bg-gray-200 text-brand-text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
            >
                Back to Tools
            </Link>
            <Link 
                to="/" 
                className="bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
            >
                Back to Home
            </Link>
        </div>
    </div>
  );
};

export default ToolsStrategiesPage;