import express from 'express'
import { createCategory, createSubCategory, getSubCategory } from '../controllers/categoryController.js';

const router= express.Router()

router.post("/create-category",createCategory)
router.post("/create-subCategory",createSubCategory)
router.get("/get-subCategory/:id",getSubCategory)

export default router;