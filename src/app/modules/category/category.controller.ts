import { Request, Response } from 'express'
import { CategoryService } from './category.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { Category } from '@prisma/client'

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.createCategory(req.body)

  sendResponse<Category>(res, {
    statusCode: 200,
    success: true,
    message: 'Category created successfully',
    data: result,
  })
})

const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getAllCategories()

  sendResponse<Category[]>(res, {
    statusCode: 200,
    success: true,
    message: 'All categories fetched successfully',
    data: result,
  })
})

const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getSingleCategory(req.params.categoryId)

  sendResponse<Category>(res, {
    statusCode: 200,
    success: true,
    message: 'Get single category successfully',
    data: result,
  })
})
const updateSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.updateSingleCategory(req.params.categoryId, req.body)

  sendResponse<Category>(res, {
    statusCode: 200,
    success: true,
    message: 'Single category updated successfully',
    data: result,
  })
})
const deleteSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.deleteCategory(req.params.categoryId)

  sendResponse<Category>(res, {
    statusCode: 200,
    success: true,
    message: 'Single category deleted successfully',
    data: result,
  })
})

export default {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateSingleCategory,
  deleteSingleCategory
}
