import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized user1" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized user2" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ mesage: "Unauthorized user3" });
    }
    req.user = user;
    console.log("from middleware",req.user)
    next();
  } catch (error) {
    console.log("Error from protectRoute controller", error);
    return res.status(500).json({ error: "Internal server Error" });
  }
};

export default protectRoute;
