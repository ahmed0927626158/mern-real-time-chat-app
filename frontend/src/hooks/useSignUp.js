import  { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuthContex } from '../context/AuthContext'
const useSignUp=()=>{
    const navigate=useNavigate();
const [loading,setLoading]=useState(false)
const {authUser,setAuthUser}=useAuthContex()
const signup=async({fullName,username,password,confirm,gender,phone})=>{
const success=handleError({fullName,username,password,confirm,gender,phone})
if(!success) return;
setLoading(true)
try {
    const response=await fetch("https://mern-chat-app-server-lovat.vercel.app/api/auth/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({fullName,username,password,confirm,gender,phone})
    })
    const data=await response.json()
    if(data.error)
    {
        throw new Error(data.error)
    }
    // localstorgae
  
// localStorage.setItem("chat-user",JSON.stringify(data))
// setAuthUser(data)
navigate("/login");

} 
catch (error) {
    toast.error(error.message)
}
finally{
    setLoading(false)
}

}
return {loading,signup}
}

export default useSignUp
function handleError({fullName,username,password,confirm,gender,phone}){
if(!fullName ||!username ||!password ||!confirm ||!gender ||!phone)
{
    toast.error("Please fill all the fields")
    return false
}
if(password!=confirm){
    toast.error("Password not match")
    return false
}
if(password.length<6){
    toast.error("Passowrd must be atleast 6 characters")
    return false
}
return true
}
