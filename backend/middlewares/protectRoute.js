import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    const decoded = jwt.verify(token, "zbzc32bV404v0tW4Jty1wbL1NPqQmvL5KJ+eP5J45p8=;");
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ mesage: "Unauthorized user" });
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
