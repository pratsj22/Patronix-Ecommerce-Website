import mongoose from "mongoose";

const subCategorySchema= new mongoose.Schema({
    _id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
    category:{
        type:Number,
        ref:'Category',
        required:true,
    }
})

export default mongoose.model("SubCategory",subCategorySchema)