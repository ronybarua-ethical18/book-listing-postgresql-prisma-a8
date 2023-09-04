# Book Listing Backend with Postgresql Prisma and Express

## Live Link

- [Live Link](https://example.com)

## Application Routes

### User

- **Signup**: `POST /api/v1/auth/signup`
- **Get All Users**: `GET /api/v1/users`
- **Get a Single User**: `GET /api/v1/users/6177a5b87d32123f08d2f5d4`
  - Description: Retrieves a user by their ID from the database.
- **Update a User**: `PATCH /api/v1/users/6177a5b87d32123f08d2f5d4`
- **Delete a User**: `DELETE /api/v1/users/6177a5b87d32123f08d2f5d4`
  - Description: Deletes a user by their ID from the database.
- **Get User Profile**: `GET /api/v1/profile`

### Category

- **Create a Category**: `POST /api/v1/categories/create-category`
- **Get All Categories**: `GET /api/v1/categories`
- **Get a Single Category**: `GET /api/v1/categories/6177a5b87d32123f08d2f5d4`
  - Description: Retrieves a category by its ID from the database.
- **Update a Category**: `PATCH /api/v1/categories/6177a5b87d32123f08d2f5d4`
- **Delete a Category**: `DELETE /api/v1/categories/6177a5b87d32123f08d2f5d4`
  - Description: Deletes a category by its ID from the database.

### Books

- **Create a Book**: `POST /api/v1/books/create-book`
- **Get All Books**: `GET /api/v1/books`
- **Get Books by Category**: `GET /api/v1/books/:categoryId/category`
  - Description: Retrieves books belonging to a specific category.
- **Get a Single Book**: `GET /api/v1/books/:id`
  - Description: Retrieves a book by its ID from the database.
- **Update a Book**: `PATCH /api/v1/books/:id`
- **Delete a Book**: `DELETE /api/v1/books/:id`
  - Description: Deletes a book by its ID from the database.

### Orders

- **Create an Order**: `POST /api/v1/orders/create-order`
- **Get All Orders**: `GET /api/v1/orders`
- **Get a Single Order**: `GET /api/v1/orders/:orderId`
  - Description: Retrieves an order by its ID from the database.

## Usage

Provide instructions on how to use these endpoints, including any required headers or request payloads.

## License

This project is licensed under the [MIT License](LICENSE).
