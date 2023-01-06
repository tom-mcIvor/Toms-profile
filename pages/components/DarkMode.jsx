import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="dark-mode-toggle">
      <IconButton
        type="button"
        onClick={toggleDarkMode}
        color="inherit"
      >
        <Brightness4Icon/>
      </IconButton>
    </div>
  );
};

export default DarkModeToggle;
