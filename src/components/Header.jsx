'use client'
import styles from './header/style.module.scss'
import { useEffect, useState } from 'react';
import Nav from '@/components/header/nav'
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function HeaderMain() {

  const [isActive, SetIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) SetIsActive(false)
  }, [pathname])

  return (
    <>
    <div className={`${styles.main} hidden md:block`}>

      <div className={`${styles.header}`}>
        <div onClick={() => {SetIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      </div>

    </div>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}