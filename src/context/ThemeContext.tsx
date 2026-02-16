'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import dynamic from 'next/dynamic';

export interface Theme {
  id: string;
  name: string;
  backgroundClass?: string;
  backgroundStyle?: React.CSSProperties;
  component?: React.ComponentType;
}

const themes: Theme[] = [
  {
    id: 'default',
    name: 'Default Light',
    backgroundClass: 'bg-white',
  },
  
  {
    id: 'amber-glow',
    name: 'Top Amber Glow',
    backgroundStyle: {
      backgroundImage: `radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #f59e0b 100%)`,
    },
  },
   {
    id: 'amber-glow-top',
    name: 'Top Amber Glow',
    backgroundStyle: {
      backgroundImage: `radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #f59e0b 100%)`,
    },
  },
  {
    id: 'pink-glow-bottom',
    name: 'Bottom Pink Glow',
    backgroundStyle: {
      backgroundImage: `radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)`,
    },
  },
  {
    id: 'pink-glow-top',
    name: 'Top Pink Glow',
    backgroundStyle: {
      backgroundImage: `radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #ec4899 100%)`,
    },
  },
  {
    id: 'emerald-glow-bottom',
    name: 'Bottom Emerald Glow',
    backgroundStyle: {
      backgroundImage: `radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #10b981 100%)`,
    },
  },
  {
    id: 'emerald-glow-top',
    name: 'Top Emerald Glow',
    backgroundStyle: {
      backgroundImage: `radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #10b981 100%)`,
    },
  },
  {
    id: 'pink-corner-dream',
    name: 'Pink Corner Dream',
    backgroundStyle: {
      backgroundImage: `
        radial-gradient(circle 600px at 0% 200px, #fce7f3, transparent),
        radial-gradient(circle 600px at 100% 200px, #fce7f3, transparent)
      `,
    },
  },
  {
    id: 'dreamy-sky-pink',
    name: 'Dreamy Sky Pink Glow',
    backgroundStyle: {
      backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)
      `,
    },
  },
  {
    id: 'teal-glow-right',
    name: 'Teal Glow Right',
    backgroundStyle: {
      background: '#ffffff',
      backgroundImage: `
        radial-gradient(circle at top right, rgba(56, 193, 182, 0.5), transparent 70%)
      `,
      filter: 'blur(80px)',
      backgroundRepeat: 'no-repeat',
    },
  },
  {
    id: 'warm-orange-glow-right',
    name: 'Warm Orange Glow Right',
    backgroundStyle: {
      background: '#ffffff',
      backgroundImage: `
        radial-gradient(circle at top right, rgba(255, 140, 60, 0.5), transparent 70%)
      `,
      filter: 'blur(80px)',
      backgroundRepeat: 'no-repeat',
    },
  },
 
];

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  const setTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};