import React from 'react';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
// FIX: Using named imports for react-router-dom to fix module resolution issues.
import { Link } from 'react-router-dom';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { WifiIcon, WifiOffIcon, HeartIcon } from '@/components/icons/StatusIcons';
import { TelegramIcon, FacebookIcon } from '@/components/icons/SocialIcons';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOnline } = useOnlineStatus();

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans">
      <header className="bg-brand-surface/80 backdrop-blur-lg border-b border-brand-border sticky top-0 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-brand-primary hover:text-brand-accent transition-colors">
              The Better You
            </Link>
            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <Link
                to="/support"
                className="text-brand-text-muted hover:text-brand-danger transition-colors"
                title="Support Us"
              >
                <HeartIcon className="h-6 w-6" />
              </Link>
              <div
                className="flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium bg-brand-bg"
                title={isOnline ? "You are online" : "You are offline"}
              >
                <span className="hidden sm:inline text-brand-text-muted">Status:</span>
                {isOnline ? (
                  <WifiIcon className="h-5 w-5 text-brand-success" />
                ) : (
                  <WifiOffIcon className="h-5 w-5 text-brand-danger" />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
      </main>
      <footer className="text-center py-6 text-brand-text-muted text-sm">
        <div className="mb-2">
            <Link to="/about" className="inline-flex items-center gap-1 text-brand-text-muted hover:text-brand-primary transition-colors">
                <HeartIcon className="h-4 w-4" />
                <span>About This App</span>
            </Link>
        </div>
        <p className="mb-4">&copy; {new Date().getFullYear()} The Better You. All Rights Reserved.</p>
        <div className="flex justify-center items-start space-x-8">
            <a href="http://t.me/thebetteryoubot/beyou" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-1 text-brand-text-muted hover:text-brand-primary transition-colors w-24" title="The Better You Telegram Bot">
                <TelegramIcon className="h-6 w-6" />
                <span className="text-xs text-center">Telegram Bot</span>
            </a>
            <a href="https://t.me/btybey" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-1 text-brand-text-muted hover:text-brand-primary transition-colors w-24" title="The Better You Telegram Channel">
                <TelegramIcon className="h-6 w-6" />
                <span className="text-xs text-center">Telegram Channel</span>
            </a>
            <a href="https://www.facebook.com/groups/1121035335352327/?ref=share&mibextid=NSMWBT" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-1 text-brand-text-muted hover:text-brand-primary transition-colors w-24" title="The Better You Facebook Group">
                <FacebookIcon className="h-6 w-6" />
                <span className="text-xs text-center">Facebook Group</span>
            </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;