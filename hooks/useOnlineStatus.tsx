
import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';

interface OnlineStatusContextType {
  isOnline: boolean;
}

const OnlineStatusContext = createContext<OnlineStatusContextType | undefined>(undefined);

const getIsOnline = () => {
  return typeof navigator !== 'undefined' ? navigator.onLine : true;
};

export const OnlineStatusProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOnline, setIsOnline] = useState(getIsOnline());

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const value = useMemo(() => ({ isOnline }), [isOnline]);

  return (
    <OnlineStatusContext.Provider value={value}>
      {children}
    </OnlineStatusContext.Provider>
  );
};

export const useOnlineStatus = (): OnlineStatusContextType => {
  const context = useContext(OnlineStatusContext);
  if (context === undefined) {
    throw new Error('useOnlineStatus must be used within an OnlineStatusProvider');
  }
  return context;
};
