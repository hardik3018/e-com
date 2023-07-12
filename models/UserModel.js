import mongoose from "mongoose";

//create userSchema model to be fetched out & to be inserted into db
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // to remove white spaces
    },
    email: {
      type: String,
      required: true,
      unique: true, // let email be unique for each users
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// exporting the collection from our database (artopia.users)
// with a refeernce to userSchema to model the collection
export default mongoose.model("users", userSchema);
