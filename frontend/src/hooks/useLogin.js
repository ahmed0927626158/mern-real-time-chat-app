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
      let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'https://mern-chat-app-client-kappa.vercel.app');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');
        console.log(username,password)
        const response=await fetch("https://mern-chat-app-server-lovat.vercel.app/api/auth/login/",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username,password})
        })
        const data=await response.json()
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
