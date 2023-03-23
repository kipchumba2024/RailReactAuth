import React from 'react'
import {FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaSmileBeam, FaRegCopyright} from "react-icons/fa"
import {GrLinkedinOption}  from "react-icons/gr"

function Footer() {
  return (
    <footer className='bg-gray-600 text-white min-h-[30vh] pt-7'>
       <div className='uppercase flex-wrap flex justify-center my-4 gap-6'>
         <a href='#'>About us</a>
         <a href='#'>Blog</a>
         <a href='#'>Questions</a>
         <a href='#'>Faqs</a>
         <a href='#'>Login</a>
       </div>
         <hr className='border-4' />
       <p className='text-center mt-5 leading-tight'>  
         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br />
         Aldus PageMaker including versions of Lorem Ipsum.
       </p>
       <div className='flex gap-8 justify-center my-10 '> 
          <FaYoutube size={25} className="hover:text-orange-600 hover:cursor-pointer"/>
          <GrLinkedinOption size={25} className="hover:text-orange-600 hover:cursor-pointer" />
          <FaFacebookF size={25} className="hover:text-orange-600 hover:cursor-pointer"/>
          <FaTwitter size={25} className="hover:text-orange-600 hover:cursor-pointer"/>
          <FaInstagram size={25} className="hover:text-orange-600 hover:cursor-pointer"/>
          <FaSmileBeam size={25} className="hover:text-orange-600 hover:cursor-pointer"/>
       </div>
       <div className='bg-gray-500 p-7 flex items-center justify-center'>
          <FaRegCopyright /> <span className='ml-5'>Copyright 2023</span>
       </div>
    </footer>
  )
}

export default Footer