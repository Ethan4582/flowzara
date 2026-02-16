'use client';

import React, { useState } from 'react';
import { useTheme } from '@/src/context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeSwitcher() {
  const { themes, currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="btn secondary transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600"
      >
        Theme
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.12 }}
            className="absolute left-0 mt-2 w-48 bg-white rounded-xl border border-gray-200 shadow-md z-50 overflow-hidden"
          >
            <div className="py-1">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                    currentTheme.id === theme.id ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                  }`}
                  onClick={() => {
                    setTheme(theme.id);
                    setIsOpen(false);
                  }}
                >
                  {theme.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}