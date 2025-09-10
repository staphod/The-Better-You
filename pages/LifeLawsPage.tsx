import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ScaleIcon } from '@/components/icons/ModuleIcons';

const LawCard: React.FC<{ to: string; title: string; description: string; }> = ({ to, title, description }) => {
  const { Link } = ReactRouterDom;
  return (
    <Link to={to} className="block group p-6 bg-brand-surface rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
      <div className="flex items-center gap-4">
        <div className="bg-brand-secondary text-white rounded-lg p-3">
            <ScaleIcon className="h-6 w-6" />
        </div>
        <div>
            <h3 className="text-lg font-bold text-brand-primary group-hover:underline">{title}</h3>
            <p className="text-sm text-brand-text-secondary mt-1">{description}</p>
        </div>
        <div className="ml-auto flex-shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-brand-primary transition-colors" viewBox="0 0 20 20" fill="currentColor">
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
      description: "Understand the fundamental principle that every action creates a specific, corresponding result."
    },
    {
      to: "/tools/laws/entropy",
      title: "The Law of Entropy",
      description: "Why systems tend towards disorder and how constant effort is required for growth."
    },
    {
      to: "/tools/laws/sowing-and-reaping",
      title: "The Law of Sowing and Reaping",
      description: "Explore the timeless agricultural principle of planting seeds for a future harvest."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-left mb-8">
        <div className="flex items-center gap-3">
          <ScaleIcon className="h-10 w-10 text-brand-primary" />
          <h1 className="text-3xl font-bold text-brand-text-primary">Life Laws & Principles</h1>
        </div>
        <p className="mt-2 text-lg text-brand-text-secondary">
          Learn the timeless laws and principles that govern our lives, from success and happiness to human behavior.
        </p>
        <Link to="/tools" className="text-sm text-brand-primary hover:underline mt-4 inline-block">&larr; Back to All Tools</Link>
      </div>

      <div className="space-y-4">
        {laws.map(law => (
            <LawCard key={law.to} to={law.to} title={law.title} description={law.description} />
        ))}
        {/* Future laws will be added here */}
      </div>
    </div>
  );
};

export default LifeLawsPage;