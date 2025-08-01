import mongoose from "mongoose";
async function connectdb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  }
  catch (error) {
    console.error("Not Connected:", error);
    process.exit(1);
  }
};
export default connectdb;