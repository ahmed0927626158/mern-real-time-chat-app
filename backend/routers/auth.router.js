import express from "express";
import cors from "cors";
import { login, signup, logout } from "./../controller/auth.controller.js";
const router = express.Router();
var corsOptions = {
  origin: 'https://mern-chat-app-client-kappa.vercel.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
router.post("/signup",signup);
router.get("/test",(req,res)=>{
  res.send(process.env.SECRET_KEY)
})
router.post("/login",login);

router.post("/logout",logout);

export default router;
