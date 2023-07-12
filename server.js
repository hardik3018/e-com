import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

//database config from config folder
connectDB();

// creating rest api object
const app = express();

// to send json data on req or response
//instead of body-parser we are using this, as express now provides this by-default
app.use(express.json());

//MIDDLEWARES
app.use(morgan("dev"));

//routes
//NAMING PATTERN⬇️
app.use("/api/v1/auth", authRoutes);

//REST API
// sending message to a request
app.get("/", (req, res) => {
  res.send("<h1> hi this is e-comm pjkt </h1>");
});

// creating port
const PORT = process.env.PORT || 8080;

// listen on the given PORT
app.listen(PORT, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} mode on port: ${PORT}`
  );
});
