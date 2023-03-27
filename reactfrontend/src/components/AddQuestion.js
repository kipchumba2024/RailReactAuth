import {useContext, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import { QuestionsContext } from '../context/QuestionsContext'

function AddQuestion() {
    const [title, setTitle] =useState("") 
    const [description, setDesc] = useState("")
    
    const {AddQuestion } = useContext(QuestionsContext)

   
    const handleSubmit = (e)=>{
      e.preventDefault()
        // send Data to rails
       AddQuestion(title, description)
       setTitle("")
       setDesc("")
    }

  return (
    <div className='flex justify-center min-h-[80vh]'>
       <div className={`bg-red-200":"bg-red-700"}  rounded-lg p-5`}>
          <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className='rounded mt-4 px-3 py-1' placeholder='Enter Title ' /><br/>
            <textarea type="text" value={description}  onChange={e => setDesc(e.target.value)} className='w-full rounded mt-4 px-3 py-1' placeholder='Enter Desc ' /><br/>
            <div className='flex justify-center'>
                <button disabled={!title || !description } className='px-3 py-1 bg-red-600 rounded-full mt-4 text-white '>Ask Question</button>
            </div>
          </form>

        </div> 
    </div>
  )
}

export default AddQuestion