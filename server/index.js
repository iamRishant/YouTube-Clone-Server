import  express  from "express";

import mongoose from "mongoose";
import userRoutes from './routes/user.js'
import videoRoutes from './routes/video.js'
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from "dotenv"
import path from 'path'
const app=express();
dotenv.config();
app.use(cors())
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use('/uploads',express.static(path.join('uploads')))


app.get('/',(req,res)=>{
    res.send("hello")
})

app.use(bodyParser.json())

app.use('/user',userRoutes)
app.use('/video',videoRoutes)
const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server Running on the PORT ${PORT}`);
})


const DB_URL= process.env.CONNECTION_URL

mongoose.connect(DB_URL,{useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
    console.log("MongoDB database connected");
}).catch((error)=>{
    console.log(error);
})