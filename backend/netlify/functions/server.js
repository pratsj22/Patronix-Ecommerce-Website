import express from "express"
import dotenv from "dotenv";
import connectDB from '../../config/dbConnection.js';
import authRoutes from '../../routes/authRoute.js'
import categoryRoute from '../../routes/categoryRoute.js'
import productRoute from '../../routes/productRoute.js'
import orderRoute from '../../routes/orderRoute.js'
import cors from 'cors';
import serverless from "serverless-http";

dotenv.config()
connectDB()
const app= express()
const port=  process.env.PORT || 8080;

app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.send("hello")
})
//routes
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/category',categoryRoute)
app.use('/api/v1/products',productRoute)
app.use('/api/v1/orders',orderRoute)

app.listen(port,()=>{
    console.log("Server running on port",port);
})

export const handler = serverless(app);