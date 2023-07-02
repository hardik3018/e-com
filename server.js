import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

// creating rest api object

const app = express();

// to send json data on req or response
//instead of body-parser we are using this as express now provides this by-default
app.use(express.json());

//MIDDLEWARES
app.use(morgan("dev"));

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
