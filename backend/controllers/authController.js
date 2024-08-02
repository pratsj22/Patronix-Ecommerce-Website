import { comparePassword, hashPassword } from "../helper/authConfig.js";
import userModel from '../models/userModel.js'
import JWT from 'jsonwebtoken'
export const registerController=async(req,res)=>{
    const{name,email,phone,password,address}=req.body;
    const userEmail= await userModel.findOne({email})
    if(userEmail){
        return res.status(400).send({error:"User Already Exists Please Login"})
    }
    const hashedPassword= await hashPassword(password);
    await userModel.create({
        name,
        email,
        phone,
        password:hashedPassword,
        address
    })
    loginController(req,res);
}
export const loginController=async(req,res)=>{
    const{email,password}=req.body;
    const user= await userModel.findOne({email})
    if(!user) return res.status(500).send({message:"User Does Not Exist Please Register"})
    const passwordCheck= await comparePassword(password,user.password)
    if(passwordCheck){
        const token= JWT.sign({_id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:"7d"});
        user.token=token;
        user.save()
        return res.send({
            message:"Login Successful",
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address
            },
            token:token,
        })
    }
    else return res.status(500).send({message:"Invalid Credentials Please try again"})
}

export const authenticate=async(req,res)=>{
    try {
        const decode= JWT.verify(req.headers.authorization.split(" ")[1],process.env.JWT_SECRET_KEY)
        if(req.headers.user===decode._id){
            res.send({
                message:"done"
            })
        }
        else res.send({
            message:"Stop playing with Local Storage"
        })
    } catch (error) {
        res.status(500).send({
            message:"error"
        })
    }

}