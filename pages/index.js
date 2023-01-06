import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import Authentication from './components/Auth'
import Welcome from './components/Home'
import DarkModeToggle from './components/DarkMode'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      
      <main className={styles.main}>
        <div className={styles.description}>
          <header className='Nav' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Welcome />
            <Authentication />
          </header>


          <Link href="/Todo"><h1>Todo</h1></Link>

          <DarkModeToggle />
          
          
        </div>
      </main>
    </>
  )
}
