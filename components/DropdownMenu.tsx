import React, { useState, useRef, useEffect } from 'react';

interface DropdownMenuProps {
  trigger: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  children: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, children }) => {
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

  const originalOnClick = trigger.props.onClick;

  const handleTriggerClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (originalOnClick) {
      originalOnClick(e);
    }
    setIsOpen(prev => !prev);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {React.cloneElement(trigger, { onClick: handleTriggerClick, 'aria-haspopup': true, 'aria-expanded': isOpen })}
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
