import React, { useState, useEffect } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import ModuleCard from '@/components/ModuleCard';
import PinModal from '@/components/PinModal';
import { BrainIcon, BookOpenIcon, ClockIcon } from '@/components/icons/ModuleIcons';

const APP_PIN_KEY = 'the-better-you-pin';

const TestsHomePage: React.FC = () => {
  const { useNavigate } = ReactRouterDom;
  const navigate = useNavigate();
  const [pin, setPin] = useState<string | null>(null);
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [pinModalMode, setPinModalMode] = useState<'set' | 'enter'>('enter');
  const [destination, setDestination] = useState('');

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

  const PrivateModuleButton: React.FC<{title: string; description: string; icon: React.ReactNode; onClick: () => void;}> = ({ title, description, icon, onClick }) => (
    <button onClick={onClick} className="w-full text-left group bg-brand-surface rounded-xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 ease-in-out p-6 flex flex-col h-full transform hover:-translate-y-1">
        <div className="flex items-center justify-start mb-4">
          <div className="bg-brand-primary/10 text-brand-primary rounded-lg p-3">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-primary transition-colors">{title}</h3>
        <p className="text-brand-text-muted flex-grow text-base">{description}</p>
    </button>
  );

  return (
    <div className="space-y-8">
      <PinModal
        mode={pinModalMode}
        isOpen={isPinModalOpen}
        onClose={() => setIsPinModalOpen(false)}
        onSuccess={handlePinSuccess}
        storedPin={pin}
      />
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
         <PrivateModuleButton
            title="Test History"
            description="Review the results from all the tests you have completed. All data is stored on your device."
            icon={<ClockIcon />}
            onClick={() => handlePrivateAccess('/tests/history')}
         />
      </div>
    </div>
  );
};

export default TestsHomePage;