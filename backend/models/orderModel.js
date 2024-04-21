import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderId:{
        type:String,
        unique:true,
    },
    products: [
        {
            id: {
                type: Number,
                ref: "Products"
            },
            quantity:{
                type:Number,
            }
        }
    ],
    totalAmount:{
        type:Number,
    },
    buyer:{
        type:String,
        ref:"Users"
    },
    status:{
        type:String,
        default:"Order Placed",
        enum:["Order Placed","Processing","Shipped","Delivered","Cancelled"]
    }
}, { timestamps: true })

export default mongoose.model("Orders", orderSchema)