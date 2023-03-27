import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Footer from './Footer'
import Navbar from './Navbar'
import Login from "../Login"

function Layout() {

  const {user} = useContext(AuthContext)

  return (
    <section>
        <Navbar/>

        {/* {
          user && user.loggedin?  */}
           <div className='min-h-[80vh]'>
              <Outlet />
            </div>
          {/* :
          <Login /> */}
         
        {/* } */}
        
       

      
    </section>
  )
}

export default Layout