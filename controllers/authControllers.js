import { comparePassword, hashPassword } from "../helper/authHelper.js";
import userModel from "../models/UserModel.js";
import JWT from "jsonwebtoken";

// register controller
// POST REGISTER
export const registerController = async (req, res) => {
  try {
    // fetching data from request
    const { name, email, password, phone, address, answer } = req.body;

    // validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    if (!answer) {
      return res.send({ message: "Answer is Required" });
    }

    // check user
    const exisitingUser = await userModel.findOne({ email });

    // exisiting user
    if (exisitingUser) {
      // The HTTP 200 OK success status response code indicates that the request has succeeded.

      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }

    // register user &
    // hash the password
    const hashedPassword = await hashPassword(password);

    // save user
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      address,
      phone,
      answer,
    }).save();

    res.status(201).send({
      // The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource.

      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    // catch any error

    console.log(error);

    // HTTP Status Code 500: "Internal Server Error"

    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};
//
//
//
//
//
//
// login controller
// POST LOGIN
export const loginController = async (req, res) => {
  try {
    //
    //
    const { email, password } = req.body;
    // validation check if email pwd is given or not
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    // check user in the database model
    const user = await userModel.findOne({ email });
    if (!user) {
      // The 404 code means that a server could not find a client-requested webpage.
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }

    // check if pwd matches from data base
    const match = await comparePassword(password, user.password);
    if (!match) {
      // The HTTP 200 OK success status response code indicates that the request has succeeded.
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    // token creation
    // await for sign
    // sign method creates token
    // and use the key from .env file
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      //expiry date of token
      expiresIn: "7d",
    });

    // when everything successfull
    // The HTTP 200 OK success status response code indicates that the request has succeeded.
    res.status(200).send({
      // succefull msg
      success: true,
      message: "login successfully",

      // user data to send
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },

      // send token as well
      token,
    });
    //
    //
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};
