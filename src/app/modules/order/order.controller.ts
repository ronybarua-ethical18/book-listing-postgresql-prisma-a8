import { Order } from '@prisma/client';
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const loggedUser:any = req.user
  const result = await OrderService.createOrder(req.body, loggedUser?.userId);

  sendResponse<Order>(res, {
    statusCode: 200,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getAllOrders(req.user);

  sendResponse<Order[]>(res, {
    statusCode: 200,
    success: true,
    message: 'All orders fetched successfully',
    data: result,
  });
});

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

const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const requesPayload:any= req.user
  const result = await OrderService.getSingleOrder(req.params.orderId, requesPayload);

  sendResponse<Order | null>(res, {
    statusCode: 200,
    success: true,
    message: 'Order is fetched successfully',
    data: result,
  });
});


export default {
  createOrder,
  getAllOrders,
  getSingleOrder,
  // getOrdersByCustomer
};
