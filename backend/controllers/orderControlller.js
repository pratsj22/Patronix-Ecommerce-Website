import Razorpay from 'razorpay'
import orderModel from '../models/orderModel.js';
export const orderController = async (req, res) => {
    try {
        const instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_ID_SECRET })
        const orders = await instance.orders.create({
            "amount": parseInt(req.body.amount),
            "currency": "INR",
            "receipt": "receipt#1",
            "partial_payment": false,
        })
        res.send({
            orders
        })
    } catch (error) {
        res.send({
            error: error.message
        })
    }
}
export const createOrderController = async (req, res) => {
    try {
        const { orderId, products, totalAmount, userId } = req.body;
        await orderModel.create({
            orderId,
            products,
            totalAmount,
            buyer: userId
        })
    } catch (error) {
        console.log(error);
    }
}
export const getordersController = async (req, res) => {
    try {
        const userId = req.params.id
        const response = await orderModel.find({ buyer: userId }).populate(`products.id`).sort({"createdAt":-1})
        const data=response.map((item) => ({
            id: item.orderId,
            status:item.status,
            products: item.products.map((prod) => (
                {
                    id: prod.id._id,
                    title: prod.id.title,
                    price: prod.id.price,
                    image: prod.id.image1,
                    quantity:prod.quantity
                }
            ))
        }));
        res.send({
            data
        })
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
}