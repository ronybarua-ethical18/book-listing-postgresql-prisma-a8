"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const book_constants_1 = require("./book.constants");
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.create({ data: data });
    return book;
});
const getAllBooks = (filters, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, skip, page, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(options);
    const { searchTerm, category } = filters, filterData = __rest(filters, ["searchTerm", "category"]);
    const andConditions = [];
    if (searchTerm) {
        const searchableFieldsConditions = book_constants_1.booksSearchableFields.map(field => ({
            [field]: {
                contains: searchTerm,
                mode: 'insensitive',
            },
        }));
        andConditions.push({ OR: searchableFieldsConditions });
    }
    if (filterData.minPrice !== undefined || filterData.maxPrice !== undefined) {
        const priceConditions = {};
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
        orderBy[sortBy] = sortOrder === 'asc' ? 'asc' : 'desc';
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const [books, totals] = yield Promise.all([
        prisma_1.default.book.findMany({
            skip,
            take: limit,
            where: whereConditions,
            include: {
                category: true,
            },
            orderBy,
        }),
        prisma_1.default.book.count({ where: whereConditions }),
    ]);
    return {
        meta: { page, limit, totals },
        data: books,
    };
});
const getBooksByCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield prisma_1.default.book.findMany({
        where: { categoryId: categoryId },
        include: {
            category: true,
        },
    });
    return books;
});
const getSingleBook = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.findUnique({ where: { id: bookId } });
    return book;
});
const updateSingleBook = (bookId, updatePayload) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.update({
        where: { id: bookId },
        data: updatePayload,
    });
    return book;
});
const deleteSingleBook = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.delete({ where: { id: bookId } });
    return book;
});
exports.BookService = {
    createBook,
    getSingleBook,
    getBooksByCategory,
    getAllBooks,
    updateSingleBook,
    deleteSingleBook,
};
