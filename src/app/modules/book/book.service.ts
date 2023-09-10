import { Book, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { booksSearchableFields } from './book.constants';
import { IBookFieldSearchRequest } from './book.interface';

const createBook = async (data: Book): Promise<Book> => {
  const book = await prisma.book.create({ data: data });
  return book;
};
const getAllBooks = async (
  filters: IBookFieldSearchRequest,
  options: IPaginationOptions
): Promise<any> => {
  const { limit, skip, page, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);
  const { searchTerm, category, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    const searchableFieldsConditions = booksSearchableFields.map(field => ({
      [field]: {
        contains: searchTerm,
        mode: 'insensitive',
      },
    }));

    andConditions.push({ OR: searchableFieldsConditions });
  }

  if (filterData.minPrice !== undefined || filterData.maxPrice !== undefined) {
    const priceConditions: any = {};

    if (filterData.minPrice !== undefined) {
      priceConditions.gte = Number(filterData.minPrice);
    }

    if (filterData.maxPrice !== undefined) {
      priceConditions.lte = Number(filterData.maxPrice);
    }

    andConditions.push({ price: priceConditions });
  }

  if (category) {
    andConditions.push({ category: { id: category } });
  }

  const orderBy = {};
  if (sortBy) {
    (orderBy as any)[sortBy] = sortOrder === 'asc' ? 'asc' : 'desc';
  }

  const whereConditions: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const [books, totals] = await Promise.all([
    prisma.book.findMany({
      skip,
      take: limit,
      where: whereConditions,
      include: {
        category: true,
      },
      orderBy,
    }),
    prisma.book.count({ where: whereConditions }),
  ]);

  return {
    meta: { page, limit, totals },
    data: books,
  };
};

const getBooksByCategory = async (categoryId: string): Promise<Book[]> => {
  const books = await prisma.book.findMany({
    where: { categoryId: categoryId },
    include: {
      category: true,
    },
  });

  return books;
};

const getSingleBook = async (bookId: string): Promise<any> => {
  const book = await prisma.book.findUnique({ where: { id: bookId } });

  return book;
};

const updateSingleBook = async (
  bookId: string,
  updatePayload: Book
): Promise<Book> => {
  const book = await prisma.book.update({
    where: { id: bookId },
    data: updatePayload,
  });

  return book;
};

const deleteSingleBook = async (bookId: string): Promise<Book> => {
  const book = await prisma.book.delete({ where: { id: bookId } });

  return book;
};

export const BookService = {
  createBook,
  getSingleBook,
  getBooksByCategory,
  getAllBooks,
  updateSingleBook,
  deleteSingleBook,
};
