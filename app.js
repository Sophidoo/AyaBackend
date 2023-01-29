import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './config/dbConnect.js';
import userRoute from './routes/userRoute.js';
dotenv.config();
dbConnect();

const app = express();
//middleware
app.use(express.json())
//routes



//login
app.use("/api/v1/users", userRoute)

//error handlers
//listen server

const PORT = process.env.PORT;
app.listen(PORT,console.log(`Server is running at ${PORT}`))