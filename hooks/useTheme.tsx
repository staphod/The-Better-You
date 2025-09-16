import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';

export type Theme = 'default' | 'forest' | 'ocean';
export type Mode = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  mode: Mode;
  setTheme: (theme: Theme) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      return (localStorage.getItem('app-theme') as Theme) || 'default';
    } catch {
      return 'default';
    }
  });

  const [mode, setModeState] = useState<Mode>(() => {
     try {
      return (localStorage.getItem('app-mode') as Mode) || 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('app-theme', theme);
    } catch (e) {
      console.error('Failed to set theme', e);
    }
  }, [theme]);

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-mode', mode);
      localStorage.setItem('app-mode', mode);
    } catch (e) {
      console.error('Failed to set mode', e);
    }
  }, [mode]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleMode = () => {
    setModeState(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({ theme, mode, setTheme, toggleMode }), [theme, mode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
