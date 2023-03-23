import {useContext, useState} from 'react'
import { AuthContext } from '../context/AuthContext'

function Register() {
    const [username, setUsername] =useState("") 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const {register } = useContext(AuthContext)

    console.log(email)
    console.log("Username",username)
    console.log(password)

    const handleSubmit = ()=>{
        // send Data to rails
        register()
    }

  return (
    <div className='flex items-center justify-center min-h-[80vh]'>
       <div className={`${username?"bg-red-200":"bg-red-700"}  rounded-lg p-5`}>
          <h1 className='text-center my-3'>Register</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setEmail(e.target.value)} className='rounded mt-4 px-3 py-1' placeholder='Enter Email ' /><br/>
            <input type="text" onChange={e => setUsername(e.target.value)} className='rounded mt-4 px-3 py-1' placeholder='Enter Username ' /><br/>
            <input type="password" onChange={e => setPassword(e.target.value)} className='rounded mt-4 px-3 py-1' placeholder='Enter Password ' /><br/>
            <div className='flex justify-center'>
                <button disabled={!username || !email || !password} className='px-3 py-1 bg-red-600 rounded-full mt-4 text-white '>Register</button>
            </div>
          </form>

        </div> 
    </div>
  )
}

export default Register