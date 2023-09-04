import { Request, Response } from 'express'
import { AuthService } from './user.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { User } from '@prisma/client'

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.getAllUsers()

  console.log("request user", req.user)

  sendResponse<User[]>(res, {
    statusCode: 200,
    success: true,
    message: 'All users fetched successfully',
    data: result,
  })
})

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.getSingleUser(req.params.userId)

  sendResponse<User>(res, {
    statusCode: 200,
    success: true,
    message: 'Get single user successfully',
    data: result,
  })
})
const updateSingleUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.updateSingleUser(req.params.userId, req.body)

  sendResponse<User>(res, {
    statusCode: 200,
    success: true,
    message: 'Single user updated successfully',
    data: result,
  })
})
const deleteSingleUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.deleteSingleUser(req.params.userId)

  sendResponse<User>(res, {
    statusCode: 200,
    success: true,
    message: 'Single user deleted successfully',
    data: result,
  })
})

export default {
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser
}
