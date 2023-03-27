import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function Navbar() 
{
   const {user, logout} = useContext(AuthContext)
   console.log("User ", user)

   const triggerLogout = () =>
   {
    logout()
   }
  return (
    <nav className='flex flex-row flex-wrap gap-4 items-center justify-between py-5 px-9'>
        <div className='text-4xl font-semibold'>
            <h1>Devs<span className='text-red-600'>Ke</span></h1>
        </div>

        <div>
            <input className='bg-gray-200 py-2 px-3 rounded-full' placeholder='Search ...' type="text" />
        </div>

        <div className='flex gap-8 text-lg text-red-600'>
            <Link to="/">Home</Link>
            <Link to="/questions">Questions</Link>
            {
             user && user.loggedin? 
             <>
              <Link to="/dashboard">Dashboard</Link>
              <div onClick={triggerLogout}>Logout</div>
              </>              
              :
              <>
               <Link to="/register">Register</Link>
               <Link to="/login">Login</Link>
              </>
            }
            
            
        </div>
    </nav>
  )
}

export default Navbar
