import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createCategory = async (data: Category): Promise<Category> => {
  const category = await prisma.category.create({ data: data });
  return category;
};
const getAllCategories = async (): Promise<Category[]> => {
  const categories = await prisma.category.findMany();

  return categories;
};

const getSingleCategory = async (categoryId: string): Promise<any> => {
  const user = await prisma.category.findUnique({ where: { id: categoryId } });

  return user;
};

const updateSingleCategory = async (
  categoryId: string,
  updatePayload: Category
): Promise<Category> => {
  const category = await prisma.category.update({
    where: { id: categoryId },
    data: updatePayload,
  });

  return category;
};

const deleteCategory = async (categoryId: string): Promise<Category> => {
  const category = await prisma.category.delete({ where: { id: categoryId } });

  return category;
};

export const CategoryService = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateSingleCategory,
  deleteCategory,
};
