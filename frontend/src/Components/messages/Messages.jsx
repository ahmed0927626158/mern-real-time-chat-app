import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from "../skeleton/MessageSkeleton"
import useListeningMessage from '../../hooks/useListeningMessage'
const Messages=()=>{
const {loading,messages}=useGetMessages()
 useListeningMessage()
  const lastRef=useRef();
    useEffect(()=>{
      setTimeout(()=>{
      lastRef.current?.scrollIntoView({behavior:'smooth'})
      },100)
      },[messages])
  return (
    <div className='px-4 flex-2 overflow-auto'>
      {!loading && messages.length>0 && messages.map((message)=>(
        <div key={message._id} ref={lastRef}>
          <Message message={message} />
        </div>
      ))}
       { loading && [...Array(3)].map((_,idx)=><MessageSkeleton key={idx}/>)}
      
      {!loading && messages.length===0 && (<p className='text-center'>Send message to start conversation</p>)}
        </div>
  ) 
}

export default Messages