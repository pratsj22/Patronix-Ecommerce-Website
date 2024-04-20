import express from 'express'
import { authenticate, loginController, registerController } from '../controllers/authController.js'
const router = express.Router()

router.post('/register',registerController)
router.post('/login',loginController)
router.get('/test',authenticate)

export default router