import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected");
  } catch (error) {
    console.log("db connecting error", error);
  }
};
export default connectToMongoDB;
