import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ToolsIcon, FeatherIcon, PencilIcon, TargetIcon, LeafIcon } from '@/components/icons/ModuleIcons';
import { LightbulbIcon } from '@/components/icons/StatusIcons';

const ToolCard: React.FC<{ to: string; title: string; description: string; icon: React.ReactNode; }> = ({ to, title, description, icon }) => {
  return (
    <Link to={to} className="block group">
      <div className="flex items-center p-6 bg-brand-surface rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-slate-200 group-hover:border-brand-primary">
        <div className="bg-brand-accent/10 text-brand-accent rounded-lg p-3">
            {icon}
        </div>
        <div className="ml-4">
            <h3 className="text-lg font-bold text-brand-primary group-hover:text-brand-accent transition-colors">{title}</h3>
            <p className="text-sm text-brand-text-muted mt-1">{description}</p>
        </div>
        <div className="ml-auto flex-shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-brand-primary transition-colors transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

const tools = [
  {
    to: "/tools/strategies/60-minutes-of-silence",
    title: "60 Minutes of Silence",
    description: "A powerful technique for deep problem-solving and unlocking creativity.",
    icon: <LightbulbIcon className="h-6 w-6" />
  },
  {
    to: "/tools/strategies/cbt",
    title: "CBT: Unchain Your Mind",
    description: "Learn Cognitive Behavioral Therapy techniques to reframe negative thoughts.",
    icon: <FeatherIcon className="h-6 w-6" />
  },
  {
    to: "/tools/strategies/journaling",
    title: "The Art of Journaling",
    description: "Unlock clarity, reduce stress, and track your growth with guided prompts.",
    icon: <PencilIcon className="h-6 w-6" />
  },
  {
    to: "/tools/strategies/buffetts-5-25-strategy",
    title: "Warren Buffett's 5/25 Strategy",
    description: "A ruthless prioritization method for achieving extreme focus on what matters.",
    icon: <TargetIcon className="h-6 w-6" />
  },
  {
    to: "/tools/strategies/bruce-lees-simplicity",
    title: "Bruce Lee's Strategy of Simplicity",
    description: "Achieve mastery by hacking away at the unessential.",
    icon: <LeafIcon className="h-6 w-6" />
  }
];

const ToolsStrategiesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredTools = useMemo(() => {
    if (!searchQuery) return tools;
    const lowerCaseQuery = searchQuery.toLowerCase();
    return tools.filter(tool =>
      tool.title.toLowerCase().includes(lowerCaseQuery) ||
      tool.description.toLowerCase().includes(lowerCaseQuery)
    );
  }, [searchQuery]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-left mb-8">
        <div className="flex items-center gap-3">
          <ToolsIcon className="h-10 w-10 text-brand-primary" />
          <h1 className="text-3xl font-bold text-brand-text">Tools & Strategies</h1>
        </div>
        <p className="mt-2 text-lg text-brand-text-muted">
          Explore these practical tools and frameworks to enhance your thinking, productivity, and decision-making.
        </p>
        <Link to="/tools" className="text-sm text-brand-primary hover:underline mt-4 inline-block">&larr; Back to All Tools</Link>
      </div>

      <div className="mb-8 relative">
        <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary bg-brand-surface"
        />
        <svg className="h-5 w-5 text-slate-400 absolute top-1/2 left-3 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>

      {filteredTools.length > 0 ? (
        <div className="space-y-4">
          {filteredTools.map(tool => (
              <ToolCard key={tool.to} {...tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-brand-surface rounded-lg border border-dashed">
            <p className="text-brand-text-muted">No tools found for "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
};

export default ToolsStrategiesPage;