import express from 'express'
import userController from './user.controller'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
const router = express.Router()

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  userController.getAllUsers
)
router.get(
  '/:userId',
  auth(ENUM_USER_ROLE.ADMIN),
  userController.getSingleUser
)
router.get(
  '/profile',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  userController.getMyProfile
)

router.patch(
  '/:userId',
  auth(ENUM_USER_ROLE.ADMIN),
  userController.updateSingleUser
)
router.delete(
  '/:userId',
  auth(ENUM_USER_ROLE.ADMIN),
  userController.deleteSingleUser
)

export const userRoutes = router;
