


import React from 'react';
// FIX: Using namespace import for react-router-dom to fix module resolution issues.
import * as ReactRouterDom from 'react-router-dom';

interface ModuleCardProps {
  to: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ to, title, description, icon }) => {
  const { Link } = ReactRouterDom;

  return (
    <Link to={to} className="block group">
      <div className="bg-brand-surface rounded-xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 ease-in-out p-6 flex flex-col h-full transform hover:-translate-y-1">
        <div className="flex items-center justify-start mb-4">
          <div className="bg-brand-primary/10 text-brand-primary rounded-lg p-3">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-primary transition-colors">{title}</h3>
        <p className="text-brand-text-muted flex-grow text-base">{description}</p>
      </div>
    </Link>
  );
};

export default ModuleCard;