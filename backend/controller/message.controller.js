import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReciverSocketId } from "../socket/socketIo.js";
import { io } from "../socket/socketIo.js";
export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const { message:messages } = req.body;

    const senderId = req.user._id;
    

    // check if the conversation exist before
    let conversation = await Conversation.findOne({
      participant: { $all: [senderId, receiverId] },
    });
    // if conversation not exist
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId:senderId,
      receiverId:receiverId,
      messages,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // save conversation and message
    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId=getReciverSocketId(receiverId)

    if(receiverSocketId){
    
      io.to(receiverSocketId).emit("newMessage",newMessage)
    }
    console.log(newMessage)
    console.log(req.user)

    return res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error from sendMessage controller", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.find({
      participants: { $all: [senderId, userToChatId] },
    })
      .populate
      ({
        path: "messages",
        select: "-__v",
      });

    if (!conversation) return res.status(200).json([]);
    let allMessages = [];

    // conversation.forEach((conversation) => {
    //   console.log(conversation.messages);
    //   allMessages.push(conversation.messages);
    // });
    const messages = conversation.map((conversation) => conversation.messages);
 
    return res.status(200).json(messages.flat());
  } catch (error) {
    console.log("Error from getMessage controller", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
