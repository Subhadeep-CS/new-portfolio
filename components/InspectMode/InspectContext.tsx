"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface InspectModeContextType {
  isInspectMode: boolean;
  setIsInspectMode: (value: boolean) => void;
  toggleInspectMode: () => void;
}

const InspectModeContext = createContext<InspectModeContextType | undefined>(undefined);

export const InspectModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInspectMode, setIsInspectMode] = useState(false);

  const toggleInspectMode = () => {
    setIsInspectMode((prev) => !prev);
  };

  // Add shortcut key (Alt+I or Cmd+I)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey || e.metaKey) && e.key === 'i') {
        e.preventDefault();
        toggleInspectMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <InspectModeContext.Provider value={{ isInspectMode, setIsInspectMode, toggleInspectMode }}>
      {children}
    </InspectModeContext.Provider>
  );
};

export const useInspectMode = () => {
  const context = useContext(InspectModeContext);
  if (context === undefined) {
    throw new Error('useInspectMode must be used within an InspectModeProvider');
  }
  return context;
};
