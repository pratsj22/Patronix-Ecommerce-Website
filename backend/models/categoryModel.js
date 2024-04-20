import mongoose from "mongoose";

const categorySchema= new mongoose.Schema({
    _id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
})

export default mongoose.model("Category",categorySchema)