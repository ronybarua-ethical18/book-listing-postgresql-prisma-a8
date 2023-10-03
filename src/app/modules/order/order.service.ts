import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createOrder = async (data: any, loggedUser: string): Promise<any> => {
  const order = await prisma.order.create({
    data: { ...data, userId: loggedUser },
  });
  return order;
};
const getAllOrders = async (loggedUser: any): Promise<Order[]> => {
  const queries: any =
    loggedUser?.role === 'customer'
      ? {
          where: { userId: loggedUser?.userId },
          include: {
            user: true,
          },
        }
      : {};

  const orders = await prisma.order.findMany(queries);

  return orders;
};

const getSingleOrder = async (
  orderId: string,
  loggedUser: any
): Promise<Order | null> => {
  const queries =
    loggedUser?.role === 'admin'
      ? { where: { id: orderId } }
      : { where: { id: orderId, userId: loggedUser?.userId } };
  const order = await prisma.order.findUnique(queries);
  return order;
};

// const getOrdersByCustomer = async (userId: string): Promise<Order[]> => {
//   const books = await prisma.order.findMany({
//     where: { userId: userId },
//     include: {
//       user: true,
//     },
//   });

//   return books;
// };

export const OrderService = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  // getOrdersByCustomer,
};
