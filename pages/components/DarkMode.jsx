import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <label className="dark-mode-toggle">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />{' '}
      Dark mode
    </label>
  );
};

export default DarkModeToggle;