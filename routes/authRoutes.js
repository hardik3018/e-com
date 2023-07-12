import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authControllers.js";

//router object
const router = express.Router(registerController);

//routing
//REGISTER || METHOD POST
// register controller from controllers folder ( as callback functino in post )

router.post("/register", registerController);

router.post("/login", loginController);

export default router;
