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
exports.AuthService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma_1.default.user.findMany();
    return users;
});
const getSingleUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({ where: { id: userId } });
    return user;
});
const getMyProfile = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({ where: { id: userId } });
    return user;
});
const updateSingleUser = (userId, updatePayload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.update({ where: { id: userId }, data: updatePayload });
    return user;
});
const deleteSingleUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.delete({ where: { id: userId } });
    return user;
});
exports.AuthService = {
    getAllUsers,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
    getMyProfile
};
