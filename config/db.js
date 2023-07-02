import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//connecting to mongoDB database

const connectDB = async () => {
  // The async function declaration declares an async function
  // where the await keyword is permitted within the function body.
  // The async and await keywords enable asynchronous, promise-based
  // behavior to be written in a cleaner style, avoiding the need
  // to explicitly configure promise chains.

  try {
    //importing the mongodb url from the {.env} file
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB database ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in MongoDB: ${error}`);
  }
};

export default connectDB;
