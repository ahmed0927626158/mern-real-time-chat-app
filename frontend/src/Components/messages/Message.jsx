import React from 'react'
import { useAuthContex } from '../../context/AuthContext'
import extractTime from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';
const Message=({message})=>{ 
const {authUser}=useAuthContex();
const {selectedConversation}=useConversation();
const fromMe=message.senderId===authUser.id;
const chatClassName=fromMe?'chat-end':'chat-start'
const profilePic=fromMe?authUser.profilePic:selectedConversation.profilePic
const  bubbleBgColor=fromMe?'bg-blue-500':''
  return (
    <div className={`chat ${chatClassName}`} >
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full '>
                <img src={profilePic} alt='chat bubble'></img>
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.messages}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{extractTime(message.createdAt)}</div>
    </div>
  )
}

export default Message