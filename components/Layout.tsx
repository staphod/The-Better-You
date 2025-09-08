
import React from 'react';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
// FIX: Using namespace import for react-router-dom to fix module resolution issues.
import * as ReactRouterDom from 'react-router-dom';
import { WifiIcon, WifiOffIcon, HeartIcon } from '@/components/icons/StatusIcons';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOnline } = useOnlineStatus();
  const { Link } = ReactRouterDom;

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary font-sans">
      <header className="bg-brand-surface shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-brand-primary hover:opacity-80 transition-opacity">
              The Better You
            </Link>
            <div
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium"
              title={isOnline ? "You are online" : "You are offline"}
            >
              <span className="hidden sm:inline text-brand-text-secondary">Status:</span>
              {isOnline ? (
                <WifiIcon className="h-5 w-5 text-green-500" />
              ) : (
                <WifiOffIcon className="h-5 w-5 text-red-500" />
              )}
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      <footer className="text-center py-4 text-brand-text-secondary text-sm">
        <div className="mb-2">
            <Link to="/credits" className="inline-flex items-center gap-1 text-gray-500 hover:text-brand-primary transition-colors">
                <HeartIcon className="h-4 w-4" />
                <span>Credits</span>
            </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} The Better You. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;