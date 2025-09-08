
import React from 'react';
import ModuleCard from '../components/ModuleCard';
import { BrainIcon, HabitIcon, ToolsIcon, AddictionIcon, PuzzleIcon } from '../components/icons/ModuleIcons';

const HomePage: React.FC = () => {
  const modules = [
    {
      to: "/tests",
      title: "Discovery Tests",
      description: "Take personality and self-discovery tests to learn more about yourself. Requires an internet connection for full tests.",
      icon: <BrainIcon />,
      status: "Hybrid" as const,
    },
    {
      to: "/habits",
      title: "Habits Tracker",
      description: "Build good habits and break bad ones using a proven framework. Works completely offline.",
      icon: <HabitIcon />,
      status: "Offline" as const,
    },
    {
      to: "/tools",
      title: "Tools & Mental Models",
      description: "Explore mental models and use interactive tools to improve your thinking and decision-making.",
      icon: <ToolsIcon />,
      status: "Hybrid" as const,
    },
    {
      to: "/addictions",
      title: "Addiction Awareness",
      description: "Learn about various addictions, their effects, and take self-assessment tests. Detailed info requires internet.",
      icon: <AddictionIcon />,
      status: "Hybrid" as const,
    },
    {
      to: "/puzzles",
      title: "Puzzles (Endless)",
      description: "Challenge your mind with a large repository of word and number puzzles. Works completely offline.",
      icon: <PuzzleIcon />,
      status: "Offline" as const,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-brand-text-primary tracking-tight sm:text-5xl">
          Welcome to Your Self-Discovery Journey
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-text-secondary">
          Explore your personality, build better habits, and sharpen your mind.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((module) => (
          <ModuleCard key={module.to} {...module} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
