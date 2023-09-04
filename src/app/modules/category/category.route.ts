import express from 'express'
import userController from './category.controller'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import { CategoryValidation } from './category.validation'
const router = express.Router()

router.post(
  '/create-category',
  validateRequest(CategoryValidation.categoryZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  userController.createCategory
)
router.get(
  '/',
  auth(),
  userController.getAllCategories
)
router.get(
  '/:categoryId',
  auth(),
  userController.getSingleCategory
)
router.patch(
  '/:categoryId',
  auth(ENUM_USER_ROLE.ADMIN),
  userController.updateSingleCategory
)
router.delete(
  '/:categoryId',
  auth(ENUM_USER_ROLE.ADMIN),
  userController.deleteSingleCategory
)

export const categoryRoutes = router;
