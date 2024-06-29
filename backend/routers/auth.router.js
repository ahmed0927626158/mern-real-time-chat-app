import express from "express";
import { login, signup, logout } from "./../controller/auth.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.get("/test",(req,res)=>{
  res.send(process.env.SECRET_KEY)
})
router.post("/login", login);

router.post("/logout", logout);

export default router;
