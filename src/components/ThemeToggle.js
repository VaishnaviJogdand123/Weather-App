import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ onToggle, theme }) => {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      {theme === 'light' ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggle;
