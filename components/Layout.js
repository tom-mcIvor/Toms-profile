import Link from 'next/link';
import React from 'react';
import DarkModeToggle from '../pages/components/DarkMode';


const Layout = ({ children }) => {
  return (
    <div>
             
      <Link href="/"><h1>Home</h1></Link>
      {children}
      <DarkModeToggle />
    </div>
  );
};

export default Layout;