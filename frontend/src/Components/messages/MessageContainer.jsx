import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useAuthContex } from '../../context/AuthContext';
function MessageContainer() {
 
  const {selectedConversation,setSelectedConversation}=useConversation()
  useEffect(()=>{
    return ()=>setSelectedConversation(null)
  },[setSelectedConversation])
  return (
    <div className='md:min-w-[450px] flex flex-col right-side'>
      {!selectedConversation? <NoChatSelected />:(
              <>
              {/* Header part hear */}
              <div className='bg-slate-500 px-4 py-2 mb-2'>
                <span className='label-text'>To:</span>{""}
                <span className='text-gray-90 font-bold'>{selectedConversation.fullName}</span>
              </div>
        
              {/* Messages components */}
              <Messages />
        
              {/* Message Input bar */}
              <MessageInput />
              </>
      )}

   
      </div>
  )
}

export default MessageContainer


const NoChatSelected=()=>{
  const {authUser}=useAuthContex()
  return(
      <div className='flex items-center justify-center w-full h-full'>
          <div className='px-4 text-center justify-center sm:text-lg md:text-xl
           text-gray-200 font-semibold flex flex-col items-center gap-2'>
              <p>Welcome {authUser.fullName} </p>
              <p>Select a Chat to start messaging </p>
               < TiMessages className='text-3xl md:text-6xl text-center'/>
           </div>

      </div>
  )
}