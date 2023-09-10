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
exports.OrderService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createOrder = (data, loggedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield prisma_1.default.order.create({ data: Object.assign(Object.assign({}, data), { userId: loggedUser }) });
    return order;
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield prisma_1.default.order.findMany({});
    return orders;
});
const getSingleOrder = (orderId, loggedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield prisma_1.default.order.findUnique({ where: { id: orderId, userId: loggedUser } });
    return order;
});
const getOrdersByCustomer = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield prisma_1.default.order.findMany({
        where: { userId: userId },
        include: {
            user: true,
        },
    });
    return books;
});
exports.OrderService = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    getOrdersByCustomer
};
