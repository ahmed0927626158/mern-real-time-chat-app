import express from "express";
import {sendMessage,getMessages} from "../controller/message.controller.js";
import protector from "../middlewares/protectRoute.js";
const router = express.Router();

router.post("/send/:id", protector, sendMessage);
router.get("/:id",protector,getMessages)
export default router;
