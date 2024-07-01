import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client"
import { useAuthContex } from "./AuthContext";
 const SocketContext=createContext();
export const useSocketContext=()=>{
    return useContext(SocketContext)
}
export const SocketContextProvider=({children})=>{
    const [socket,setSocket]=useState(null);
    const [onlineUsers,setOnlineUsers]=useState([]);
    const {authUser}=useAuthContex();
    useEffect(()=>{
        if(authUser){
            const socket=io("https://mern-chat-app-server-lovat.vercel.app",
               {
                query:{
                    userId:authUser.id
                },
                credentials:'include' 

            });
            setSocket(socket);
            socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users)
            })

            return ()=>socket.close()
        }
        else{
            if(socket){
                socket.close();
                setSocket(null)
            }
        }
    },[authUser])
    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}
