import {useContext, useState} from 'react'
import { AuthContext } from '../context/AuthContext'

function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {login } = useContext(AuthContext)
    

    const handleSubmit = (e)=>{
        // send Data to rails
        e.preventDefault()
        login(username, password)
    }

  return (
    <div className='flex items-center justify-center min-h-[80vh]'>
       <div className={`bg-gray-400 rounded-lg p-5`}>
          <h1 className='text-center my-3'>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setUsername(e.target.value)} className='rounded mt-4 px-3 py-1' placeholder='Enter username ' /><br/>
            <input type="password" onChange={e => setPassword(e.target.value)} className='rounded mt-4 px-3 py-1' placeholder='Enter Password ' /><br/>
            <div className='flex justify-center'>
                <button disabled={!username || !password} className='px-3 py-1 bg-red-600 rounded-full mt-4 text-white '>Login</button>
            </div>
          </form>

        </div> 
    </div>
  )
}

export default Register