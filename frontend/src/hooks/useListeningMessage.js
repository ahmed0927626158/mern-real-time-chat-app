import { useEffect } from "react";
import {useSocketContext} from "../context/socketContext"
import useConversation from "../zustand/useConversation"
const useListeningMessage = () => {
const {socket}=useSocketContext();
const {messages,setMessages}=useConversation();

useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        setMessages([...messages,newMessage])
    })
},[socket,setMessages,messages])

}

export default useListeningMessage

