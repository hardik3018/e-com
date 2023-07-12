import JWT from "jsonwebtoken";

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
