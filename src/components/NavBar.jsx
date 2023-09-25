"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { RxHamburgerMenu } from 'react-icons/rx'
import Header from './header'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-gradient-to-r from-amber-200 to-amber-500 group-hover:w-full transition-[width] ease duration-300 absolute left-0 bottom-0 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
        
    )
}
const NavBar = () => {
  return (
    <header className="mb-[-100px]  self-stretch bg-gray-500 h-[100px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-[90%] m-auto top-[0] z-[2] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">

        <nav className='md:hidden m-0 flex-1  flex flex-row py-2.5 px-5 items-center  justify-center gap-7 font-poppins text-sm tracking-widest '>
            <CustomLink href="/" title="INICIO" className='text-gray-white no-underline' />
            <CustomLink href="/servicios" title={`SERVICIOS`} className='text-gray-white no-underline'/>
            <CustomLink href="/faq" title={`PREGUNTAS`} className='text-gray-white no-underline'/>
        </nav>
        <img
          className="relative md:absolute md:left-5 w-[178px] h-[69px] object-cover"
          alt=""
          src="/salvawebprolong-logoalone50p-1.png"
        />
        <nav className='md:hidden m-0 flex-1  flex flex-row py-2.5 px-5 items-center  justify-center gap-7 font-poppins text-sm tracking-widest'>
            <CustomLink href="/testimonios" title={`TESTIMONIOS`} className='text-gray-white no-underline' />
            <CustomLink href="/acerca" title={`ACERCA`} className='text-gray-white no-underline' />
            <CustomLink href="/contacto" title={`CONTACTO`} className='text-gray-white no-underline' />
        </nav>
        <div >
          <Header className='hidden md:block'/>
        </div>

    </header>
  )
}

export default NavBar