import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className="header-icon-btn theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light Theme' : 'Dark Theme'}
    >
      {isDark ? (
        <Sun size={19} className="theme-icon sun-icon" />
      ) : (
        <Moon size={19} className="theme-icon moon-icon" />
      )}
    </button>
  );
};
