import React, { useEffect,useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'
const useGetMessages =()=> {
 const [loading,setLoading]=useState(false)
 const {messages,setMessages,selectedConversation}=useConversation()

  useEffect(()=>{
  const getMessage=async()=>{
    setLoading(true)
    try {
       const response=await fetch(`https://mern-chat-app-server-lovat.vercel.app/api/messages/${selectedConversation?._id}`) 
       const data=await response.json()
       if(data.error){
        throw new Error(data.error)
       }
       setMessages(data)
    } catch (error) {
        toast.error(error.message)
    }
    finally{
        setLoading(false)
    }
  }
  if(selectedConversation?._id) getMessage()
 },[selectedConversation?._id,setMessages])
 return {loading,messages}
}

export default useGetMessages
