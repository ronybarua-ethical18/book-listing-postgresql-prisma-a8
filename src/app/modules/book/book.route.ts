import express from 'express';
import bookController from './book.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  bookController.createBook
);
router.get('/', auth(), bookController.getAllBooks);
router.get('/:categoryId/category', auth(), bookController.getBooksByCategory);
router.get('/:bookId', auth(), bookController.getSingleBook);
router.patch(
  '/:bookId',
  auth(ENUM_USER_ROLE.ADMIN),
  bookController.updateSingleBook
);
router.delete(
  '/:bookId',
  auth(ENUM_USER_ROLE.ADMIN),
  bookController.deleteSingleBook
);

export const bookRoutes = router;
