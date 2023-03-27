import React, {useContext} from 'react'
import Footer from './layout/Footer'
import {BsQuestionSquareFill} from "react-icons/bs"
import { AuthContext } from '../context/AuthContext'
import { QuestionsContext } from '../context/QuestionsContext'

function Dashboard() {
  const {user} = useContext(AuthContext)
  const {questions } = useContext(QuestionsContext)

  return (
    <div>
      {user && user.user?
      <>
        <div className='min-h-[70vh] bg-gray-100 rounded container mx-auto p-4'>
            <h1>Dashboard</h1>
            <div className='grid grid-cols-3 gap-5'>
                 <div className='flex flex-col justify-center items-center bg-gray-500 rounded-lg p-4 text-white'>
                    <h1>{questions.length}</h1>
                    <BsQuestionSquareFill />
                    <h1>Questions</h1>
                </div>
                 <div className='bg-red-500 rounded-lg p-4 text-white'>01</div>
                 <div className='bg-orange-500 rounded-lg p-4 text-white'>01</div>
            </div>
        </div>
        <Footer/>
      </>
      :
      // 
      <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium"></span> Login to access this page
</div>
      }

    </div>
  )
}

export default Dashboard