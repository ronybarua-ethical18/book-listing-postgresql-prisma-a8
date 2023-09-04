import { Request, Response } from 'express'
import { BookService } from './book.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { Book } from '@prisma/client'
import pick from '../../../shared/pick'
import { bookFilterableFields } from './book.constants'

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBook(req.body)

  sendResponse<Book>(res, {
    statusCode: 200,
    success: true,
    message: 'Book created successfully',
    data: result,
  })
})

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await BookService.getAllBooks(filters, options)

  sendResponse<Book[]>(res, {
    statusCode: 200,
    success: true,
    message: 'All books fetched successfully',
    meta:result.meta,
    data: result.data,
  })
})

const getBooksByCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getBooksByCategory(req.params.categoryId)

  sendResponse<Book[]>(res, {
    statusCode: 200,
    success: true,
    message: 'All books fetched successfully',
    data: result,
  })
})

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getSingleBook(req.params.bookId)

  sendResponse<Book>(res, {
    statusCode: 200,
    success: true,
    message: 'Get single book successfully',
    data: result,
  })
})
const updateSingleBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.updateSingleBook(req.params.bookId, req.body)

  sendResponse<Book>(res, {
    statusCode: 200,
    success: true,
    message: 'Single book updated successfully',
    data: result,
  })
})
const deleteSingleBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.deleteSingleBook(req.params.bookId)

  sendResponse<Book>(res, {
    statusCode: 200,
    success: true,
    message: 'Single book deleted successfully',
    data: result,
  })
})

export default {
  createBook,
  getAllBooks,
  getBooksByCategory,
  getSingleBook,
  updateSingleBook,
  deleteSingleBook
}
