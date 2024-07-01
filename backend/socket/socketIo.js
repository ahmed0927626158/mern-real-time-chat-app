import {Server} from "socket.io"
import http from 'http'
import express from 'express'


const app=express()

const server =http.createServer(app)
const io= new Server(server)

const userSocketMap={}
io.on("connection",(socket)=>{
    const userId=socket.handshake.query.userId;
    console.log("user connect with",socket.id,userId);
    
    
    if(userId!="undefined") userSocketMap[userId]=socket.id;
    io.emit('getOnlineUsers',Object.keys(userSocketMap))

    
    socket.on('disconnect',()=>{
        console.log("user disconnected"); 
        delete userSocketMap[userId]
        io.emit('getOnlineUsers',Object.keys(userSocketMap))
    })
})
export const getReciverSocketId=(receiverId)=>{
    return userSocketMap[receiverId]
}
export {app,io,server}
