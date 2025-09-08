import React from 'react';
// FIX: Using namespace import for react-router-dom to fix module resolution issues.
import * as ReactRouterDom from 'react-router-dom';
import { WifiOffIcon } from '@/components/icons/StatusIcons';

const OfflinePage: React.FC = () => {
  const { Link } = ReactRouterDom;
  return (
    <div className="flex flex-col items-center justify-center text-center h-full max-w-md mx-auto">
        <WifiOffIcon className="h-24 w-24 text-brand-accent mb-6" />
        <h1 className="text-4xl font-bold text-brand-text-primary">You are Offline</h1>
        <p className="mt-4 text-lg text-brand-text-secondary">
            This feature requires an internet connection. Please check your connection or use the online/offline simulator in the header to go back online.
        </p>
        <Link 
            to="/" 
            className="mt-8 bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
        >
            Back to Home
        </Link>
    </div>
  );
};

export default OfflinePage;