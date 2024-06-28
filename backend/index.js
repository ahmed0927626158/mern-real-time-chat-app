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
app.use(cors({origin:"https://mern-chat-app-client-git-master-ahmeds-projects-9985ac0b.vercel.app"}));
app.use(express.json());
app.use(cookieParser());

// define the routes here
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);



server.listen(5000, () => {
  connectToMongoDB();
  

});
