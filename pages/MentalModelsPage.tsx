import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { NetworkIcon, AtomIcon, PillarIcon, BrainIcon, ScaleIcon, ToolsIcon, ClockIcon, OceanIcon, HeartbeatIcon } from '@/components/icons/ModuleIcons';
import { ShieldCheckIcon } from '@/components/icons/StatusIcons';

const ModelCard: React.FC<{ to: string; title: string; description: string; icon: React.ReactNode; }> = ({ to, title, description, icon }) => {
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

const models = [
  {
    to: "/tools/models/first-principles",
    title: "First Principles Thinking",
    description: "Deconstruct problems to their fundamental truths to innovate and solve with clarity.",
    icon: <AtomIcon />
  },
  {
    to: "/tools/models/stoicism",
    title: "Stoicism: The Art of Resilience",
    description: "Build inner peace and resilience by focusing on what you can control.",
    icon: <PillarIcon />
  },
  {
    to: "/tools/models/second-order-thinking",
    title: "Second-Order Thinking",
    description: "Always ask: “And then what?” Look at the consequences of consequences.",
    icon: <NetworkIcon />
  },
  {
    to: "/tools/models/inversion",
    title: "Inversion",
    description: "Instead of asking “How do I succeed?”, ask “How could I fail?” and then avoid those things.",
    icon: <BrainIcon />
  },
  {
    to: "/tools/models/opportunity-cost",
    title: "Opportunity Cost",
    description: "Every choice has a cost: what you give up by not choosing the next best option.",
    icon: <ScaleIcon />
  },
  {
    to: "/tools/models/occams-razor",
    title: "Occam’s Razor",
    description: "The simplest explanation is often the best one—don’t overcomplicate unnecessarily.",
    icon: <ToolsIcon />
  },
  {
    to: "/tools/models/hanlons-razor",
    title: "Hanlon’s Razor",
    description: "Never attribute to malice what can be explained by incompetence or ignorance.",
    icon: <BrainIcon />
  },
  {
    to: "/tools/models/confirmation-bias",
    title: "Confirmation Bias",
    description: "Our tendency to seek evidence that confirms our beliefs while ignoring contradictory data.",
    icon: <AtomIcon />
  },
  {
    to: "/tools/models/availability-heuristic",
    title: "Availability Heuristic",
    description: "We judge things as more likely if they’re easier to recall—though memory doesn’t equal probability.",
    icon: <ClockIcon />
  },
  {
    to: "/tools/models/survivorship-bias",
    title: "Survivorship Bias",
    description: "We see winners and forget losers, leading to overly optimistic conclusions.",
    icon: <OceanIcon />
  },
  {
    to: "/tools/models/loss-aversion",
    title: "Loss Aversion",
    description: "Losses feel more painful than equivalent gains feel good, affecting our decisions.",
    icon: <HeartbeatIcon />
  },
  {
    to: "/tools/models/circle-of-competence",
    title: "Circle of Competence",
    description: "Know what you truly understand—and stay within that zone when making decisions.",
    icon: <ShieldCheckIcon />
  },
  {
    to: "/tools/models/bayesian-thinking",
    title: "Bayesian Thinking",
    description: "Update your beliefs continuously as new evidence comes in, instead of holding them rigidly.",
    icon: <ToolsIcon />
  }
];

const MentalModelsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredModels = useMemo(() => {
    if (!searchQuery) return models;
    const lowerCaseQuery = searchQuery.toLowerCase();
    return models.filter(model =>
      model.title.toLowerCase().includes(lowerCaseQuery) ||
      model.description.toLowerCase().includes(lowerCaseQuery)
    );
  }, [searchQuery]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-left mb-8">
        <div className="flex items-center gap-3">
          <NetworkIcon className="h-10 w-10 text-brand-primary" />
          <h1 className="text-3xl font-bold text-brand-text">Mental Models</h1>
        </div>
        <p className="mt-2 text-lg text-brand-text-muted">
          Explore this library of powerful mental models to improve your thinking, decision-making, and understanding of the world.
        </p>
        <Link to="/tools" className="text-sm text-brand-primary hover:underline mt-4 inline-block">&larr; Back to All Tools</Link>
      </div>

       <div className="mb-8 relative">
        <input
            type="text"
            placeholder="Search models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary bg-brand-surface"
        />
        <svg className="h-5 w-5 text-slate-400 absolute top-1/2 left-3 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>

      {filteredModels.length > 0 ? (
        <div className="space-y-4">
          {filteredModels.map(model => (
              <ModelCard key={model.to} {...model} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-brand-surface rounded-lg border border-dashed">
            <p className="text-brand-text-muted">No models found for "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
};

export default MentalModelsPage;