import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout() {
  return (
    <section>
        <Navbar/>

        <div className='min-h-[80vh]'>
              <Outlet />
        </div>
       

      
    </section>
  )
}

export default Layout