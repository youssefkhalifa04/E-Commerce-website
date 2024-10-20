import React from 'react';
import { useTheme } from './ThemeContext.jsx'; // Adjust the path accordingly

export const Theme = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (event) => {
    setTheme(event.target.value); // Update the theme
  };

  return (
    <div >
      <div className="dropdown">
        <div tabIndex={0} role="button" className='pt-2 pb-2 pr-4 pl-4'>
          Theme
          
        </div>
        <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Default"
              value="default"
              checked={theme === 'default'}
              onChange={handleThemeChange}
            />
            
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Luxury"
              value="luxury"
              checked={theme === 'luxury'}
              onChange={handleThemeChange}
            />
            
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Nord"
              value="nord"
              checked={theme === 'nord'}
              onChange={handleThemeChange}
            />
           
          </li>
        </ul>
      </div>
    </div>
  );
};
