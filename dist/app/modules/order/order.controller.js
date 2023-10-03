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
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const order_service_1 = require("./order.service");
const createOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loggedUser = req.user;
    const result = yield order_service_1.OrderService.createOrder(req.body, loggedUser === null || loggedUser === void 0 ? void 0 : loggedUser.userId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Order created successfully',
        data: result,
    });
}));
const getAllOrders = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderService.getAllOrders(req.user);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'All orders fetched successfully',
        data: result,
    });
}));
// const getOrdersByCustomer = catchAsync(async (req: Request, res: Response) => {
//   const requesPayload:any= req.user
//   const result = await OrderService.getOrdersByCustomer(requesPayload.userId);
//   sendResponse<Order[]>(res, {
//     statusCode: 200,
//     success: true,
//     message: 'All orders fetched successfully',
//     data: result,
//   });
// });
const getSingleOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requesPayload = req.user;
    const result = yield order_service_1.OrderService.getSingleOrder(req.params.orderId, requesPayload.userId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Order is fetched successfully',
        data: result,
    });
}));
exports.default = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    // getOrdersByCustomer
};
