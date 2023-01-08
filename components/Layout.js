import Link from 'next/link';
import React from 'react';
import DarkModeToggle from '../pages/components/DarkMode';
import Welcome from '../pages/components/Home';
import Authentication from '../pages/components/Auth';


const Layout = ({ children }) => {
  return (
    <>
   

      <main className='sideNav'>
          
        
            <header className='Nav' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Welcome />
              
            </header>
            <div className='links'>

              <Link href="/"><h1>Home</h1></Link>
              <Link href="/Todo"><h1>Todo</h1></Link>
              <Link href="/Weather"><h1>Weather</h1></Link>
              <Link href="/components/Calculator"><h1>Calculator</h1></Link>
            </div>


            <DarkModeToggle/> 
            </main> 
            <div id="container">
              {children}
              </div>
            </>
           
  )
}

export default Layout;