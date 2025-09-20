import React from 'react';
import { Link } from 'react-router-dom';
import ModuleCard from '@/components/ModuleCard';
import { BrainIcon, BookOpenIcon, ClockIcon } from '@/components/icons/ModuleIcons';


const TestsHomePage: React.FC = () => {
  const publicModules = [
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
    {
      to: "/tests/history",
      title: "Test History",
      description: "Review your past test results. This section is PIN-protected for your privacy.",
      icon: <ClockIcon />,
    },
  ];


  return (
    <div className="space-y-8">
      <div className="text-left mb-8">
        <h1 className="text-3xl font-bold text-brand-text">Discovery Tests</h1>
        <p className="mt-2 text-lg text-brand-text-muted">
          Engage with our assessments or dive deep into the knowledge behind them.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {publicModules.map(({ to, title, description, icon }) => (
          <ModuleCard key={to} to={to} title={title} description={description} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default TestsHomePage;