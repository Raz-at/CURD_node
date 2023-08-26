import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import blogModel from "./models/blogModel.js";
import blogrouter from "./routes/blogroutes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/blog",blogrouter)

app.listen(8000,async (req,res)=>{
    console.log("server connected sucefully...")
    try
    {
        await mongoose.connect(process.env.MONGO_CON)
        console.log("Connection to db success")
    }
    catch (error)
    {
        console.log("Error Occur: ",error)
    }
})

