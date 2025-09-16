import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ScaleIcon, ToolsIcon, NetworkIcon } from '@/components/icons/ModuleIcons';

const LawCard: React.FC<{ to: string; title: string; description: string; icon: React.ReactNode; }> = ({ to, title, description, icon }) => {
  const { Link } = ReactRouterDom;
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

const LifeLawsPage: React.FC = () => {
  const { Link } = ReactRouterDom;
  
  const laws = [
    {
      to: "/tools/laws/cause-and-effect",
      title: "The Law of Cause and Effect",
      description: "Understand the fundamental principle that every action creates a specific, corresponding result.",
      icon: <ScaleIcon className="h-6 w-6" />,
    },
    {
      to: "/tools/laws/entropy",
      title: "The Law of Entropy",
      description: "Why systems tend towards disorder and how constant effort is required for growth.",
      icon: <ToolsIcon className="h-6 w-6" />,
    },
    {
      to: "/tools/laws/sowing-and-reaping",
      title: "The Law of Sowing and Reaping",
      description: "Explore the timeless agricultural principle of planting seeds for a future harvest.",
      icon: <ScaleIcon className="h-6 w-6" />,
    },
    {
      to: "/tools/laws/pareto-principle",
      title: "Pareto Principle (80/20 Rule)",
      description: "80% of results come from 20% of actions. Focus on the vital few, not the trivial many.",
      icon: <ScaleIcon className="h-6 w-6" />,
    },
    {
      to: "/tools/laws/diminishing-returns",
      title: "Law of Diminishing Returns",
      description: "Beyond a certain point, more input brings less additional output.",
      icon: <ScaleIcon className="h-6 w-6" />,
    },
    {
      to: "/tools/laws/feedback-loops",
      title: "Feedback Loops",
      description: "Systems where outputs feed back to influence inputs, causing compounding or stabilization.",
      icon: <NetworkIcon className="h-6 w-6" />,
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-left mb-8">
        <div className="flex items-center gap-3">
          <ScaleIcon className="h-10 w-10 text-brand-primary" />
          <h1 className="text-3xl font-bold text-brand-text">Life Laws & Principles</h1>
        </div>
        <p className="mt-2 text-lg text-brand-text-muted">
          Learn the timeless laws and principles that govern our lives, from success and happiness to human behavior.
        </p>
        <Link to="/tools" className="text-sm text-brand-primary hover:underline mt-4 inline-block">&larr; Back to All Tools</Link>
      </div>

      <div className="space-y-4">
        {laws.map(law => (
            <LawCard key={law.to} {...law} />
        ))}
        {/* Future laws will be added here */}
      </div>
    </div>
  );
};

export default LifeLawsPage;