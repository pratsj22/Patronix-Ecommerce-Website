import productModel from "../models/productModel.js";

// export const createProductController=async(req,res)=>{
//     try {
//         const {id,title,desc,price,category,subCategory,imagePath1,imagePath2,newArrival,productType}= req.body;
//         const image1= await getImageUrl(imagePath1)
//         const image2= await getImageUrl(imagePath2)
//         await productModel.create({
//             _id:id,
//             title,
//             description:desc,
//             newArrival,
//             productType,
//             price,
//             image1,
//             image2,
//             category,
//             subCategory
//         })
//         res.send({
//             message:"created"
//         })
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             message:error
//         })
//     }
// }

export const getSingleProductController=async(req,res)=>{
    try {
        const response = await productModel.findById({_id:req.params.id})
        res.send({
            response
        })
    } catch (error) {
        res.status(500).send({
            error
        })
    }
}
export const getTypeWiseProducts=async(req,res)=>{
    const response=await productModel.find({productType:req.params.productType})
    res.send({
        response
    })
}
export const getCategoryWiseProducts=async(req,res)=>{
    try {
        const{sort,subCats}=req.body;
        const filter={}
        filter["category"]=req.params.id;
        if(subCats[0]) filter["subCategory"]=subCats
        const response=await productModel.find(filter).sort(sort)
        res.send({
            response
        })
    } catch (error) {
        res.status(500).send({
            error
        })
    }
}
export const getSearchedProduct =async(req,res)=>{
    try {
        const query= req.body.query
        const response=await productModel.find({
            $or:[
                {title:{$regex:query,$options:"i"}},
                {description:{$regex:query,$options:"i"}}
            ]
        })
        res.send({
            response
        })
    } catch (error) {
        res.status(500).send({
            error
        })
    }
}