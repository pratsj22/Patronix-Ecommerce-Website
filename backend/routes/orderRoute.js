import express from 'express'
import { createOrderController, getordersController, orderController } from '../controllers/orderControlller.js';

const router = express.Router();

router.post('/',orderController);
router.post('/create',createOrderController);
router.get('/get-orders/:id',getordersController);

export default router;