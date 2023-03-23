import React from 'react'
import Footer from './layout/Footer'
import {BsQuestionSquareFill} from "react-icons/bs"

function Dashboard() {
 
  return (
    <div>
        <div className='min-h-[70vh] bg-gray-100 rounded container mx-auto p-4'>
            <h1>Dashboard</h1>
            <div className='grid grid-cols-3 gap-5'>
                 <div className='flex flex-col justify-center items-center bg-gray-500 rounded-lg p-4 text-white'>
                    <h1>01</h1>
                    <BsQuestionSquareFill />
                    <h1>Questions</h1>
                </div>
                 <div className='bg-red-500 rounded-lg p-4 text-white'>01</div>
                 <div className='bg-orange-500 rounded-lg p-4 text-white'>01</div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Dashboard