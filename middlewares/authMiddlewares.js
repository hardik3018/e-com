import JWT from "jsonwebtoken";
import UserModel from "../models/UserModel";

//protect Rotes on token base

// this next is executed brfore sending responses
// the next will be validated and then the res will be sent
// until next isnt succesfull execution will pause &
// prev code will be shown, we won't fwd to next code

export const requireSignIn = async (req, res, next) => {
  try {
    // we will verify the token recieved while login/regoster
    // token is found in header of a page instead of the body headers->authorization
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    req.user = decode;
    next();
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
  //
};

// check admin acess

export const isAdmin = async (req, res, next) => {
  try {
    // user id
    const user = await UserModel.findById(req.user._id);

    // checking if user is admin or not
    // as admin has user rolw == 1
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    // catch any error

    console.log(error);

    // HTTP Status Code 500: "Internal Server Error"

    res.status(500).send({
      success: false,
      message: "Error in Authentication",
      error,
    });
  }
};
