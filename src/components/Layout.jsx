import React from 'react'
import NavBar from './NavBar'
import FooterComponent from './footer-component'
import "@/app/css/globals.css"

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full bg-gray-600 h-full inline-block z-0 ${className}`}>
        <NavBar/>
        {children}
        <FooterComponent/>
    </div>
    
  )
}

export default Layout