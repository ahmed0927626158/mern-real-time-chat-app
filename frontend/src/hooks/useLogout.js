import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContex } from "../context/AuthContext"

const useLogout=()=> {
    const [loading,setLoading]=useState(false)
    const {setAuthUser}=useAuthContex()
    const logout=async()=>
    {
    try {
        const response= await fetch("https://mern-chat-app-server-lovat.vercel.app/api/auth/logout",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            credentials:'include'
        })
        const data=await response.json()
        if(data.error){
            throw new Error(data.error)
        }
        localStorage.removeItem("chat-user")
        setAuthUser(null)
    } catch (error) {
        toast.error(error.message)
    }
    finally{
        setLoading(false)
    }

    }
 return {loading,logout}
}

export default useLogout
