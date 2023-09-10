"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("./user.controller"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get('/profile', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), user_controller_1.default.getMyProfile);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.default.getAllUsers);
router.get('/:userId', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.default.getSingleUser);
router.patch('/:userId', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.default.updateSingleUser);
router.delete('/:userId', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.default.deleteSingleUser);
exports.userRoutes = router;
