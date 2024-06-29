import { useState } from "react"
import { useAuthContex } from "../context/AuthContext"
import toast from "react-hot-toast"
const  useLogin=()=>{
 const [loading,setLoading]=useState(false)
 const {authUser,setAuthUser}=useAuthContex()
 const login=async(username,password)=>{
    const success=handleInputError(username,password)
    if(!success) return;
    setLoading(true)
    try 
    {
        console.log(JSON.stringify({username,password})
        const response=await fetch("/api/auth/login/",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username,password})
        })
        const data=await response.json()
     console.log(data)
        if(data.error){
            throw new Error(data.error)
        }
        // localstorgae
    const string=JSON.stringify(data)
    localStorage.setItem("chat-user",string)
    console.log(data)
    setAuthUser(data)
    } 
    catch (error) {
        toast.error(error.message)
    }
    finally{
        setLoading(false)
    }
 }
 return {loading,login}
}

export default useLogin
function handleInputError(username,password){
    if(!username || !password){
        toast.error("All fields are required")
        return false
    } 
    return true
}
