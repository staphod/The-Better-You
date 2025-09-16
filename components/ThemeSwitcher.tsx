import React, { useState, useRef, useEffect } from 'react';
import { useTheme, Theme } from '@/hooks/useTheme';
import { SunIcon, MoonIcon, PaletteIcon } from '@/components/icons/ThemeIcons';

const themes: { name: Theme; label: string }[] = [
  { name: 'default', label: 'Default' },
  { name: 'forest', label: 'Forest' },
  { name: 'ocean', label: 'Ocean' },
];

const ThemeSwitcher: React.FC = () => {
  const { theme, mode, setTheme, toggleMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-brand-text-muted hover:text-brand-primary"
        title="Change theme"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <PaletteIcon className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-brand-surface rounded-md shadow-lg py-2 z-20 ring-1 ring-brand-border">
          <div className="px-4 py-2 text-sm font-semibold text-brand-text">Color Theme</div>
          {themes.map((t) => (
            <button
              key={t.name}
              onClick={() => { setTheme(t.name); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 ${theme === t.name ? 'text-brand-accent' : 'text-brand-text hover:bg-brand-bg'}`}
            >
              <div className={`w-4 h-4 rounded-full border border-brand-border theme-swatch-${t.name}`}></div>
              {t.label}
              {theme === t.name && <span className="ml-auto">✔</span>}
            </button>
          ))}
          <div className="border-t border-brand-border my-2"></div>
          <div className="px-4 py-2 text-sm font-semibold text-brand-text">Mode</div>
          <button
            onClick={() => { toggleMode(); setIsOpen(false); }}
            className="w-full text-left px-4 py-2 text-sm flex items-center gap-2 text-brand-text hover:bg-brand-bg"
          >
            {mode === 'light' ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
            Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>
      )}
       <style>
        {`
          .theme-swatch-default { background-color: #475569; }
          .theme-swatch-forest { background-color: #3F6212; }
          .theme-swatch-ocean { background-color: #1E40AF; }
        `}
      </style>
    </div>
  );
};

export default ThemeSwitcher;
