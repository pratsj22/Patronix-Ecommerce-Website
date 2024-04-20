import categoryModel from "../models/categoryModel.js";
import subCategoryModel from "../models/subCategoryModel.js";

export const createCategory=async(req,res)=>{
    try {
        const {id,name}= req.body;
        await categoryModel.create({
            _id:id,
            name,
        })
        res.send({
            message:"cat created"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:error
        })
    }
}

export const createSubCategory=async(req,res)=>{
    try {
        console.log("hiii");
        const {id,name,category}= req.body;
        await subCategoryModel.create({
            _id:id,
            name,
            category,
        })
        res.send({
            message:"sub cat created"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:error
        })
    }
}
export const getSubCategory=async(req,res)=>{
    try {
        const response = await subCategoryModel.find({category:req.params.id})
        res.send({
            response
        })
    } catch (error) {
        res.status(500).send({
            error
        })
    }
}