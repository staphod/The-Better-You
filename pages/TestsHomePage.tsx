import React from 'react';
import ModuleCard from '@/components/ModuleCard';
import { BrainIcon, BookOpenIcon } from '@/components/icons/ModuleIcons';

const TestsHomePage: React.FC = () => {
  const subModules = [
    {
      to: "/tests/list",
      title: "Take a Test",
      description: "Select from a list of personality and self-discovery tests to learn more about yourself.",
      icon: <BrainIcon />,
    },
    {
      to: "/tests/knowledge-base",
      title: "Knowledge Base",
      description: "Explore the theories behind our tests and learn about all the possible outcomes and personality profiles in detail.",
      icon: <BookOpenIcon />,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-left mb-8">
        <h1 className="text-3xl font-bold text-brand-text-primary">Discovery Tests</h1>
        <p className="mt-2 text-lg text-brand-text-secondary">
          Engage with our assessments or dive deep into the knowledge behind them.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {subModules.map(({ to, title, description, icon }) => (
          <ModuleCard key={to} to={to} title={title} description={description} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default TestsHomePage;
