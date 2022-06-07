import React from 'react'
import MobileMenu from './mobileMenu/mobileMenu'
import { Outlet } from 'react-router-dom'

const Layout:React.FC = () => {


  return (
    <div className="flex flex-col min-h-screen bg-heading mx-auto">

        <div className='md:mx-auto'>
            <Outlet />
        </div>
        <div className='md:mx-auto'>
            <MobileMenu />
        </div>
    </div>
  )
}

export default Layout