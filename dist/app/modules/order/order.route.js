"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const order_controller_1 = __importDefault(require("./order.controller"));
const router = express_1.default.Router();
router.post('/create-order', 
// validateRequest(BookValidation.createBookZodSchema),
(0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.default.createOrder);
router.get('/', (0, auth_1.default)(), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), order_controller_1.default.getAllOrders);
router.get('/customer', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.default.getOrdersByCustomer);
router.get('/:orderId', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER, user_1.ENUM_USER_ROLE.ADMIN), order_controller_1.default.getSingleOrder);
exports.orderRoutes = router;
