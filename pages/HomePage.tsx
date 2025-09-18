import React, { useState, useEffect } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import ModuleCard from '@/components/ModuleCard';
import PinModal from '@/components/PinModal';
import PurposeAiModal from '@/components/PurposeAiModal';
import DailyAffirmation from '@/components/DailyAffirmation';
import DailyReflection from '@/components/DailyReflection';
import { AiIcon } from '@/components/icons/SocialIcons';
import { BrainIcon, HabitIcon, ToolsIcon, AddictionIcon, PuzzleIcon, DiaryIcon, MoodIcon, ClockIcon } from '@/components/icons/ModuleIcons';

const APP_PIN_KEY = 'the-better-you-pin';

const HomePage: React.FC = () => {
  const navigate = ReactRouterDom.useNavigate();
  const [pin, setPin] = useState<string | null>(null);
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [pinModalMode, setPinModalMode] = useState<'set' | 'enter'>('enter');
  const [destination, setDestination] = useState('');
  const [isPurposeAiModalOpen, setIsPurposeAiModalOpen] = useState(false);

  useEffect(() => {
    try {
        const storedPin = localStorage.getItem(APP_PIN_KEY);
        setPin(storedPin);
    } catch (e) { console.error("Could not read PIN from localStorage", e); }
  }, []);

  const handlePrivateAccess = (path: string) => {
    setDestination(path);
    if (pin) {
        setPinModalMode('enter');
    } else {
        setPinModalMode('set');
    }
    setIsPinModalOpen(true);
  };

  const handlePinSuccess = (newPin: string) => {
    if (pinModalMode === 'set') {
        try {
            localStorage.setItem(APP_PIN_KEY, newPin);
            setPin(newPin);
        } catch(e) { console.error("Could not save PIN to localStorage", e); }
    }
    setIsPinModalOpen(false);
    navigate(destination);
  };
  
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

  const PrivateModuleButton: React.FC<{title: string; description: string; icon: React.ReactNode; onClick: () => void;}> = ({ title, description, icon, onClick }) => (
    <button onClick={onClick} className="w-full text-left group bg-brand-surface rounded-xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 ease-in-out p-6 flex items-start text-left h-full">
        <div className="flex-shrink-0 bg-brand-primary/10 text-brand-primary rounded-lg p-3">
            {icon}
        </div>
        <div className="ml-4">
            <h3 className="text-xl font-bold text-brand-text mb-1 group-hover:text-brand-primary transition-colors">{title}</h3>
            <p className="text-brand-text-muted text-base">{description}</p>
        </div>
    </button>
  );

  return (
    <div className="space-y-12">
      <PinModal
        mode={pinModalMode}
        isOpen={isPinModalOpen}
        onClose={() => setIsPinModalOpen(false)}
        onSuccess={handlePinSuccess}
        storedPin={pin}
      />
      <PurposeAiModal isOpen={isPurposeAiModalOpen} onClose={() => setIsPurposeAiModalOpen(false)} />

      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-brand-text tracking-tight sm:text-5xl md:text-6xl">
          Welcome to Your Journey
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-text-muted">
          Explore your personality, build better habits, and sharpen your mind.
        </p>
      </div>
      
      {/* Today's Focus Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <ClockIcon className="h-5 w-5 text-brand-text-muted" />
            <h2 className="text-xl font-bold text-brand-text">Today's Focus</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DailyAffirmation />
          <DailyReflection />
        </div>
      </div>

      {/* Private Section */}
      <div className="space-y-4">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-text-muted" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5.02.997.997 0 001 6v5a1 1 0 001 1h.538l.044.025a12.003 12.003 0 0114.836 0l.044-.025H18a1 1 0 001-1V6a.997.997 0 00-1.166-.976A11.954 11.954 0 0110 1.944zM10 14a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /><path d="M10 18.01a14.004 14.004 0 00-8.391 2.653.997.997 0 00.22 1.666C3.12 22.825 6.425 24 10 24s6.88-1.175 8.17-1.671a.997.997 0 00.221-1.666A14.004 14.004 0 0010 18.01z" /></svg>
            <h2 className="text-xl font-bold text-brand-text">Private Sanctum</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <PrivateModuleButton
                title="Habits Tracker"
                description="Build good habits. Kept private and secure with your PIN."
                icon={<HabitIcon />}
                onClick={() => handlePrivateAccess('/habits')}
             />
             <PrivateModuleButton
                title="Diary"
                description="A secure space for your private thoughts and reflections."
                icon={<DiaryIcon />}
                onClick={() => handlePrivateAccess('/diary')}
             />
             <PrivateModuleButton
                title="Mood Tracker"
                description="Log your daily mood and add notes to track your emotional state."
                icon={<MoodIcon />}
                onClick={() => handlePrivateAccess('/mood')}
             />
          </div>
      </div>
      
      {/* Public Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            <h2 className="text-xl font-bold text-brand-text">Core Modules</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <button 
            onClick={() => setIsPurposeAiModalOpen(true)}
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
          </button>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
