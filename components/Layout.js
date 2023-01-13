import Link from 'next/link';
import React from 'react';
import DarkModeToggle from '../pages/components/DarkMode';
import Welcome from '../pages/components/Home';
import Footer from '../pages/components/Footer';



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
              <Link href="/components/Tennis"><h1>Tennis</h1></Link>

            </div>


            <DarkModeToggle/> 
            </main> 
            <div id="container">
              {children}
              </div>

              <footer id='footer1'>
                <Footer/>
              </footer>
            </>
           
  )
}

export default Layout;