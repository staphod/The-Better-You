import React, { useEffect } from 'react';
// FIX: Using named imports for react-router-dom to fix module resolution issues.
import { Link, useNavigate } from 'react-router-dom';
import { WifiOffIcon } from '@/components/icons/StatusIcons';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';

const OfflinePage: React.FC = () => {
  const { isOnline } = useOnlineStatus();
  const navigate = useNavigate();

  useEffect(() => {
    // When the connection is restored, try to navigate back to the previous page.
    if (isOnline) {
      navigate(-1);
    }
  }, [isOnline, navigate]);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center text-center h-full max-w-md mx-auto">
        <WifiOffIcon className="h-24 w-24 text-brand-accent mb-6" />
        <h1 className="text-4xl font-bold text-brand-text-primary">You are Offline</h1>
        <p className="mt-4 text-lg text-brand-text-secondary">
            This feature requires an internet connection. We'll automatically take you back when your connection is restored.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
                onClick={handleReload}
                className="bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                aria-label="Reload page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              Reload
            </button>
            <Link 
                to="/" 
                className="bg-gray-200 text-brand-text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
            >
                Back to Home
            </Link>
        </div>
    </div>
  );
};

export default OfflinePage;