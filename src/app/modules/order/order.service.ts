import {Order } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createOrder = async (data: any, loggedUser:string): Promise<any> => {
  const order = await prisma.order.create({ data: {...data, userId:loggedUser} });
  return order;
};
const getAllOrders = async (): Promise<Order[]> => {
  const orders = await prisma.order.findMany({});

  return orders;
};

const getSingleOrder = async(orderId:string, loggedUser:string):Promise<Order|null>=>{
  const order = await prisma.order.findUnique({where:{id:orderId, userId:loggedUser}})
  return order
}

const getOrdersByCustomer = async (userId: string): Promise<Order[]> => {
  const books = await prisma.order.findMany({
    where: { userId: userId },
    include: {
      user: true,
    },
  });

  return books;
};



export const OrderService = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getOrdersByCustomer
};
