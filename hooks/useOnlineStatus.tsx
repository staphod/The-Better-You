
import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';

interface OnlineStatusContextType {
  isOnline: boolean;
  toggleOnlineStatus: () => void;
}

const OnlineStatusContext = createContext<OnlineStatusContextType | undefined>(undefined);

export const OnlineStatusProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOnline, setIsOnline] = useState(true);

  const toggleOnlineStatus = useCallback(() => {
    setIsOnline(prev => !prev);
  }, []);
  
  const value = useMemo(() => ({ isOnline, toggleOnlineStatus }), [isOnline, toggleOnlineStatus]);

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
