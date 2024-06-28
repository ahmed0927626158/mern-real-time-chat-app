import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'
const  Conversations=()=>{
const {loading,conversation}=useGetConversation()

  return (
    <div className='py-3 flex flex-col overflow-auto conversations'>
      {
        conversation.map((user,index)=>(
          <Conversation
           key={user._id} 
           conversation={user}
           lastIndex={index==conversation.length-1}
           />
        ))
      }

       {loading?(<span className='loading loading-spinner'></span>):(null) }
    </div>
  )
}

export default Conversations