import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected to:", conn.connection.name);
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;