import express from 'express'
import { createProductController, getCategoryWiseProducts, getSearchedProduct, getSingleProductController, getTypeWiseProducts } from '../controllers/productController.js';

const router= express.Router()

router.post("/create-product",createProductController)
router.get("/:productType",getTypeWiseProducts)
router.post("/category/:id",getCategoryWiseProducts)
router.get("/product/:id",getSingleProductController)
router.post("/search",getSearchedProduct)

export default router;