"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = __importDefault(require("./category.controller"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/create-category', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), category_controller_1.default.createCategory);
router.get('/', (0, auth_1.default)(), category_controller_1.default.getAllCategories);
router.get('/:categoryId', (0, auth_1.default)(), category_controller_1.default.getSingleCategory);
router.patch('/:categoryId', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), category_controller_1.default.updateSingleCategory);
router.delete('/:categoryId', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), category_controller_1.default.deleteSingleCategory);
exports.categoryRoutes = router;
