import express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import addusers from "./routes/properDec.js";
import getJob from "./routes/job.js";
import login from './routes/properDec.js';
import addjob from "./routes/job.js";

const app = express();
const url ="mongodb+srv://qureshiwali362:123@cluster0.tz7aaqw.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect(url)
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Error connecting to the database:", err));


app.listen(5000);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));
app.use("/dashboard/adduser",addusers);
app.use("/dashboard/media", getJob);
app.use("/usersignup",login);

app.use('/dashboard/addjob', addjob);
app.get("/",(req,res)=>{
  res.send("App is running");
});

// app.use("/dashboard/media",jobdata);

