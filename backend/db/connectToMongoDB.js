import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ahmed:ahmed1234zehara@cluster0.txyzm7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("connected");
  } catch (error) {
    console.log("db connecting error", error);
  }
};
export default connectToMongoDB;
