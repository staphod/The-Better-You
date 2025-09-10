import React from 'react';
import ModuleCard from '@/components/ModuleCard';
import { ToolsIcon, NetworkIcon, ScaleIcon } from '@/components/icons/ModuleIcons';

const ToolsPage: React.FC = () => {
  const subModules = [
    {
      to: "/tools/strategies",
      title: "Tools & Strategies",
      description: "Discover practical tools and effective strategies for better decision-making and self-improvement.",
      icon: <ToolsIcon />,
    },
    {
      to: "/tools/models",
      title: "Mental Models",
      description: "Explore a library of powerful mental models to improve your thinking and understand the world.",
      icon: <NetworkIcon />,
    },
    {
      to: "/tools/laws",
      title: "Life Laws & Principles",
      description: "Learn timeless laws and principles that govern success, happiness, and human behavior.",
      icon: <ScaleIcon />,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-left mb-8">
        <h1 className="text-3xl font-bold text-brand-text-primary">Tools & Mental Models</h1>
        <p className="mt-2 text-lg text-brand-text-secondary">
          Select a category to explore powerful frameworks for thinking and living better.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subModules.map(({ to, title, description, icon }) => (
          <ModuleCard key={to} to={to} title={title} description={description} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;