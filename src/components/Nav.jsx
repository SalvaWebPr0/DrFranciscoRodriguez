import React, { useState } from 'react'
import styles from '@/components/header/nav/style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '@/components/header/anim';
import Link from '@/components/header/nav/Link';
import Curve from '@/components/header/nav/Curve';
import Footer from '@/components/header/nav/Footer';

const navItems = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Acerca",
    href: "/acerca",
  },
  {
    title: "Preguntas",
    href: "/faq",
  },
  {
    title: "Contacto",
    href: "/contacto",
  },
  {
    title: "Testimonios",
    href: "/testimonios",
  },
  {
    title: "Servicios",
    href: "/servicios",
  },
]

export default function Navi() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={`${styles.menu} bg-sendblack`}>
       <div className={`${styles.body} p-16 sm:p-10`}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                    <div className={`${styles.header} `}>
                        <p className='text-[18px] sm:text-[16px]'>Dr Francisco Rodriguez</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Link key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Link>
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}