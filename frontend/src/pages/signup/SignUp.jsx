import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox'
import useSignUp from '../../hooks/useSignUp'
const SignUp=()=>{
  const [inputs,setInputs]=useState({
    fullName:"",
    username:"",
    password:"",
    confirm:"",
    gender:"",
    phone:""
  })

const handleCheckboxChange=(gender)=>{
  setInputs({...inputs,gender:gender})
}
const {loading,signup}=useSignUp()

const handleSubmit=async(e)=>{
  e.preventDefault()
  await signup(inputs)
  
}
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounder-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

      <h1 className='text-3xl font-semibold text-center text-gray-300'>
        SignUp <span className='text-blue-500'>Chat</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Full Name</span>
              </label>
              <input type='text' placeholder='John Doe' className='w-full input input-border h-10'
              value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
              ></input>
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text '>username</span>
              </label>
              <input type='text' placeholder='username' className='w-full input input-border h-10'
              value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})}
              ></input>
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text '>password</span>
              </label>
              <input type='password' placeholder='password' className='w-full input input-border h-10'
              value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})}
              ></input>
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text '>Confirm Password</span>
              </label>
              <input type='password' placeholder='Confirm Password' className='w-full input input-border h-10'
              value={inputs.confirm} onChange={(e)=>setInputs({...inputs,confirm:e.target.value})}
              ></input>
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text '>Phone</span>
              </label>
              <input type='text' placeholder='Phone' className='w-full input input-border h-10'
              value={inputs.phone} onChange={(e)=>setInputs({...inputs,phone:e.target.value})}
              ></input>
            </div>

            {/* Gender checkbox */}
            <GenderCheckbox onChangeCheckbox={handleCheckboxChange} selectedGender={inputs.gender} />

            <Link to="/login" className='text-sm  text-white hover:underline hover:text-blue-600 mt-2 inline-block hover:cursor-pointer'>Already have an account</Link>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-70' disabled={loading}>
             {loading?(<span className='loading loading-spinner'></span>):("SingUp")} </button> 
          </form>

      </div>

    </div>
  )
}

export default SignUp