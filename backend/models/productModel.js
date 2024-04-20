import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    _id:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
    },
    newArrival:{
        type:Boolean,
        required:true,
    },
    productType:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image1:{
        type:String,
        required:true,
    },
    image2:{
        type:String,
        required:true,
    },
    category:{
        type:Number,
        ref:'Category',
        required:true,
    },
    subCategory:{
        type:Number,
        ref:'SubCategory',
        required:true,
    }
},{timestamps:true})

export default mongoose.model("Products",productSchema)