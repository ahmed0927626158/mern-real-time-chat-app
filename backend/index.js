import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import 'dotenv/config';
import { app,io,server } from "./socket/socketIo.js";
import userRoute from "./routers/user.route.js";
import authRoute from "./routers/auth.router.js";
import messageRoute from "./routers/message.router.js";

import connectToMongoDB from "./db/connectToMongoDB.js";



// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// define the routes here
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);
app.get("/test",(req,res)=>{
  
  res.send("<h3>Hello World"</h3>")
})


server.listen(5000, () => {
  connectToMongoDB();
  

});
