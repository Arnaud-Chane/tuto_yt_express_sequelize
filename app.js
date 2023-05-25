import express from "express";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();
const app = express();

const corsOptions = {
  origin: 'https://localhost:8081'
}

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//testing API
app.get("/", (req, res) => {
  res.json({ message: "Hello" });

});

// Port
const port = process.env.PORT || 8080;


// Server
app.listen(port, () => {
  console.log(`Running on ${port}`)
});




