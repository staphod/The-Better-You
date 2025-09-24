

import React from 'react';
import { Link } from 'react-router-dom';
import ModuleCard from '@/components/ModuleCard';
import DailyAffirmation from '@/components/DailyAffirmation';
import DailyQuote from '@/components/DailyQuote';
import { AiIcon } from '@/components/icons/SocialIcons';
import { BrainIcon, ToolsIcon, AddictionIcon, PuzzleIcon } from '@/components/icons/ModuleIcons';
import { LightbulbIcon } from '@/components/icons/StatusIcons';

const HomePage: React.FC = () => {

  const publicModules = [
    {
      to: "/tests",
      title: "Discovery Tests",
      description: "Take personality and self-discovery tests to learn more about yourself.",
      icon: <BrainIcon />,
    },
    {
      to: "/tools",
      title: "Tools & Mental Models",
      description: "Explore frameworks and tools to improve your thinking and decision-making.",
      icon: <ToolsIcon />,
    },
    {
      to: "/addictions",
      title: "Addiction Awareness",
      description: "Learn about various addictions and take confidential self-assessment tests.",
      icon: <AddictionIcon />,
    },
    {
      to: "/puzzles",
      title: "Puzzles (Endless)",
      description: "Challenge your mind with a large repository of word and number puzzles.",
      icon: <PuzzleIcon />,
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-brand-text tracking-tight sm:text-5xl md:text-6xl">
          Welcome to Your Journey
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-text-muted">
          Explore your personality, build better habits, and sharpen your mind.
        </p>
      </div>
      
      {/* Public Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            <h2 className="text-xl font-bold text-brand-text">Core Modules</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {publicModules.map(({ to, title, description, icon }) => (
            <ModuleCard key={to} to={to} title={title} description={description} icon={icon} />
          ))}
        </div>
      </div>

      {/* Featured Tool Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
            <h2 className="text-xl font-bold text-brand-text">Featured Tool</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link 
            to="/purpose-ai"
            className="block group text-left"
          >
            <div className="bg-brand-surface rounded-xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 ease-in-out p-6 flex flex-col h-full transform hover:-translate-y-1">
              <div className="flex items-center justify-start mb-4">
                <div className="bg-brand-primary/10 text-brand-primary rounded-lg p-3">
                  <AiIcon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-primary transition-colors">Purpose AI</h3>
              <p className="text-brand-text-muted flex-grow text-base">An AI-powered tool to help you find your purpose and achieve personal growth. Click to explore.</p>
            </div>
          </Link>
        </div>
      </div>

       {/* Inspiration Corner Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <LightbulbIcon className="h-5 w-5 text-brand-text-muted" />
            <h2 className="text-xl font-bold text-brand-text">Inspiration Corner</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DailyQuote />
          <DailyAffirmation />
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;