

import React from 'react';
// FIX: Using namespace import for react-router-dom to fix module resolution issues.
import * as ReactRouterDom from 'react-router-dom';

interface ModuleCardProps {
  to: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  // status: 'Online' | 'Offline' | 'Hybrid'; // This prop is no longer used in the UI
}

const ModuleCard: React.FC<ModuleCardProps> = ({ to, title, description, icon }) => {
  /*
  const statusColors = {
    Online: 'bg-red-100 text-red-800',
    Offline: 'bg-green-100 text-green-800',
    Hybrid: 'bg-blue-100 text-blue-800',
  };
  */
  const { Link } = ReactRouterDom;

  return (
    <Link to={to} className="block group">
      <div className="bg-brand-surface rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-6 flex flex-col h-full transform hover:-translate-y-1">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-brand-primary text-white rounded-lg p-3">
            {icon}
          </div>
          {/* Developer Note: Status display hidden as per user request. */}
          {/*
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusColors[status]}`}>
            {status}
          </span>
          */}
        </div>
        <h3 className="text-xl font-bold text-brand-text-primary mb-2 group-hover:text-brand-primary transition-colors">{title}</h3>
        <p className="text-brand-text-secondary flex-grow">{description}</p>
      </div>
    </Link>
  );
};

export default ModuleCard;