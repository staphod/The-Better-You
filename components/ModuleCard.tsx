



import React from 'react';
// FIX: Using named import for react-router-dom to fix module resolution issues.
import { Link } from 'react-router-dom';

interface ModuleCardProps {
  to: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ to, title, description, icon }) => {

  return (
    <Link to={to} className="block group">
      <div className="bg-brand-surface rounded-xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 ease-in-out p-4 flex flex-col h-full transform hover:-translate-y-1">
        <div className="flex items-center justify-start mb-3">
          <div className="bg-brand-primary/10 text-brand-primary rounded-lg p-2">
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-bold text-brand-text mb-1 group-hover:text-brand-primary transition-colors">{title}</h3>
        <p className="text-brand-text-muted flex-grow text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default ModuleCard;