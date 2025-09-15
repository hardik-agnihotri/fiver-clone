import express from "express";
import dotenv from "dotenv"
import { dbConnection } from "./db/connection.js";

dotenv.config()
const app = express();



app.listen(8800,()=>{
    dbConnection();
    console.log(`backend is running on the port ${8800} ok`)
}); 
