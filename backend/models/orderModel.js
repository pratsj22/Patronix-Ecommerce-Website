import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    products: [
        {
            _id: {
                type: Number,
                ref: "Products"
            },
        }
    ],
    buyer:{
        type:Number,
        ref:"Users"
    },
    paymentMode:{
        type:String
    },
    status:{
        type:String,
        default:"Not processed yet",
        enum:["Not processed yet","Processing","Shipped","Delivered","Cancelled"]
    }
}, { timestamps: true })

export default mongoose.model("Products", orderSchema)