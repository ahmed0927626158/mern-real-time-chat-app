import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
function Login() {
const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const {loading,login}=useLogin()
  const handleSubmit=async(e)=>{
    e.preventDefault()
   
    await login(username,password)
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Login   <span className='text-blue-500'>Chat</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text  '>username</span>
              </label>
              <input type='text' placeholder='username' className='w-full input input-border h-10'
              value={username} onChange={(e)=>setUsername(e.target.value)}
              ></input>
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text '>password</span>
              </label>
              <input type='password' placeholder='password' className='w-full input input-border h-10'
              value={password} onChange={(e)=>setPassword(e.target.value)}
              ></input>
            </div>


          <Link to="/signup" className='text-sm  text-white hover:underline hover:text-blue-600 mt-2 inline-block hover:cursor-pointer'>Don't have an account</Link>
          <button type='submit' className='btn btn-block btn-sm mt-2' disabled={loading}>
            {loading?(<span className='loading loading-spinner'></span>):("Login")}
          </button>
          
          </form>
      </div>

    </div>
  )
}

export default Login