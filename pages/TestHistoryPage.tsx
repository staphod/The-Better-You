import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTestHistory } from '@/hooks/useTestHistory';
import { ClockIcon } from '@/components/icons/ModuleIcons';
import PinModal from '@/components/PinModal';

const APP_PIN_KEY = 'the-better-you-pin';

const TestHistoryPage: React.FC = () => {
  const { history } = useTestHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState<string | null>(null);
  const [isPinModalOpen, setIsPinModalOpen] = useState(true);
  const [pinModalMode, setPinModalMode] = useState<'set' | 'enter'>('enter');
  
  useEffect(() => {
    try {
        const storedPin = localStorage.getItem(APP_PIN_KEY);
        setPin(storedPin);
        if (!storedPin) {
            setPinModalMode('set');
        } else {
            setPinModalMode('enter');
        }
    } catch (e) { 
        console.error("Could not read PIN from localStorage", e); 
        setPinModalMode('set');
    }
  }, []);

  const handlePinSuccess = (newPin?: string) => {
    if (pinModalMode === 'set' && newPin) {
        try {
            localStorage.setItem(APP_PIN_KEY, newPin);
            setPin(newPin);
        } catch(e) { console.error("Could not save PIN to localStorage", e); }
    }
    setIsPinModalOpen(false);
    setIsAuthenticated(true);
  };
  
  if (!isAuthenticated) {
      return (
          <PinModal
            mode={pinModalMode}
            isOpen={isPinModalOpen}
            onClose={() => { /* Cannot close PIN for this page */ }}
            onSuccess={handlePinSuccess}
            storedPin={pin}
          />
      );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-left mb-8">
        <div className="flex items-center gap-3">
            <ClockIcon className="h-10 w-10 text-brand-primary"/>
            <h1 className="text-3xl font-bold text-brand-text">Test History</h1>
        </div>
        <p className="mt-2 text-lg text-brand-text-muted">
          Review the results from tests you've completed. All data is stored securely on your device.
        </p>
        <Link to="/tests" className="text-sm text-brand-primary hover:underline mt-4 inline-block">&larr; Back to Discovery Tests Home</Link>
      </div>
      
      {history.length > 0 ? (
        <div className="space-y-4">
          {history.map((item) => (
            <Link key={item.id} to={`/tests/history/${item.id}`} className="block group">
              <div className="p-4 sm:p-6 border border-slate-200 rounded-lg bg-brand-surface shadow-sm transition-all duration-200 group-hover:border-brand-primary group-hover:shadow-md">
                <div className="flex justify-between items-start">
                    <div className="flex-1 min-w-0">
                        <p className="text-lg font-semibold text-brand-primary truncate group-hover:text-brand-accent transition-colors">{item.testTitle}</p>
                        <p className="text-sm text-brand-text-muted mt-1">Completed: {new Date(item.dateCompleted).toLocaleString()}</p>
                        <p className="text-sm text-brand-text-muted font-mono mt-2 bg-slate-50 p-2 rounded-md inline-block">{item.summary}</p>
                    </div>
                    <div className="ml-4 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 transform transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-6 bg-brand-surface rounded-lg shadow-sm border border-slate-200">
          <ClockIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-brand-text">No History Yet!</h2>
          <p className="text-brand-text-muted mt-2">Your completed test results will appear here once you finish a test.</p>
           <Link to="/tests/list" className="mt-6 inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/90 transition-opacity">
               Take a Test Now
            </Link>
        </div>
      )}
    </div>
  );
};

export default TestHistoryPage;