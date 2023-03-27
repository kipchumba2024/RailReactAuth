import {useContext, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import { QuestionsContext } from '../context/QuestionsContext'
import AddQuestion from "./AddQuestion"

function Questions() {
    
    
    const {questions } = useContext(QuestionsContext)
    const {user} = useContext(AuthContext)
    console.log("Question page ", user)
    
  return (
    <div className='container mx-auto min-h-[80vh]'>
       <h1 className='text-xl'>Questions</h1>
      
      <div className='flex gap-4'>
        <div className='w-2/3'>
        {
          questions && questions.map((question)=>(
            <div className=" mb-3 m p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{question.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{question.description}</p>
            
              <div className='flex gap-5'>
                <p>question by {question.user.username}</p>
                <p>{question.created_at}</p>
              </div>
              
              {
                user && user.user && user.user.username === question && question.user.username?
              <div className='flex justify-end gap-5'>
                 <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>
                 <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
              </div>:""
              }
              
            </div>
          ))     
        }
        </div>
        <div className='w-1/3 bg-gray-200'>
          <h1 className='mt-5 text-center' >Add Question</h1>
          {
            user && user.loggedin?
            <AddQuestion/>
            :
            <div class="w-2/3 mx-auto p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <span class="font-medium"></span>Login to add a question
            </div>
          }
          
        </div>
      </div>


    </div>
  )
}

export default Questions