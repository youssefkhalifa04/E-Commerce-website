// ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Theme Context
const ThemeContext = createContext();

// Custom hook to use the Theme Context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'default');

  useEffect(() => {
    document.body.className = theme; // Apply the theme to the body
    localStorage.setItem('theme', theme); // Persist the theme in local storage
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
