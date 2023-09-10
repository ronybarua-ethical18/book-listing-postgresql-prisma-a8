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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_service_1 = require("./book.service");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const book_constants_1 = require("./book.constants");
const createBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.createBook(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Book created successfully',
        data: result,
    });
}));
const getAllBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, book_constants_1.bookFilterableFields);
    const options = (0, pick_1.default)(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = yield book_service_1.BookService.getAllBooks(filters, options);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'All books fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const getBooksByCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.getBooksByCategory(req.params.categoryId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'All books fetched successfully',
        data: result,
    });
}));
const getSingleBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.getSingleBook(req.params.bookId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Get single book successfully',
        data: result,
    });
}));
const updateSingleBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.updateSingleBook(req.params.bookId, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Single book updated successfully',
        data: result,
    });
}));
const deleteSingleBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.deleteSingleBook(req.params.bookId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Single book deleted successfully',
        data: result,
    });
}));
exports.default = {
    createBook,
    getAllBooks,
    getBooksByCategory,
    getSingleBook,
    updateSingleBook,
    deleteSingleBook
};
