import express from 'express'
import authController from './auth.controller'
const router = express.Router()

router.post(
  '/signup',
  authController.signUp
)
router.post(
  '/login',
  authController.loginUser
)

export const authRoutes = router;
