import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { Secret } from 'jsonwebtoken';

const signup = async (payload: User): Promise<User> => {
  const { email:requestEmail, password } = payload;

  const isUserExist = await prisma.user.findFirst({
    where: {
      email: requestEmail,
    },
  });

  if (isUserExist) {
    throw new ApiError(httpStatus.FOUND, 'user already exist');
  }

  const hashPassword = await bcrypt.hash(
    password,
    Number(config.bycrypt_salt_rounds)
  );

  const user = await prisma.user.create({
    data: {
      ...payload,
      password: hashPassword,
    },
  });

  return user;
};

const loginUser = async (payload: User): Promise<any> => {
  const { email:requestEmail, password:requestPassoword } = payload;

  const isUserExist = await prisma.user.findFirst({
    where: {
      email: requestEmail,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  const isPasswordMatched = await bcrypt.compare(requestPassoword, isUserExist.password)

  if (isUserExist.password && !isPasswordMatched) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  const { id: userId, role } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken,
  };
};

export const AuthService = {
  signup,
  loginUser,
};
