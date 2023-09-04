import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllUsers = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();

  return users;
};

const getSingleUser = async (userId: string): Promise<any> => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  return user;
};


const getMyProfile = async (userId: string): Promise<any> => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  return user;
};

const updateSingleUser = async (userId: string, updatePayload: User): Promise<User> => {
  const user = await prisma.user.update({ where: { id: userId }, data: updatePayload });

  return user;
};

const deleteSingleUser = async (userId: string): Promise<User> => {
  const user = await prisma.user.delete({ where: { id: userId }});

  return user;
};

export const AuthService = {
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  getMyProfile
};
