"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = __importDefault(require("./book.controller"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/create-book', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.default.createBook);
router.get('/', (0, auth_1.default)(), book_controller_1.default.getAllBooks);
router.get('/:categoryId/category', (0, auth_1.default)(), book_controller_1.default.getBooksByCategory);
router.get('/:bookId', (0, auth_1.default)(), book_controller_1.default.getSingleBook);
router.patch('/:bookId', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.default.updateSingleBook);
router.delete('/:bookId', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.default.deleteSingleBook);
exports.bookRoutes = router;
