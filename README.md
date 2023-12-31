# Book Listing Backend with Postgresql Prisma and Express

## Live Link

- [Live Link](https://book-listing-postgresql-prisma-express.vercel.app)

## Application Routes

### User

- **Signup**: `POST /api/v1/auth/signup`
- **Get All Users**: `GET /api/v1/users`
- **Get a Single User**: `GET /api/v1/users/376bc2e8-f11d-40c6-9622-f77f9c01b4bc`
  - Description: Retrieves a user by their ID from the database.
- **Update a User**: `PATCH /api/v1/users/376bc2e8-f11d-40c6-9622-f77f9c01b4bc`
- **Delete a User**: `DELETE /api/v1/users/376bc2e8-f11d-40c6-9622-f77f9c01b4bc`
  - Description: Deletes a user by their ID from the database.
- **Get User Profile**: `GET /api/v1/users/profile`

### Category

- **Create a Category**: `POST /api/v1/categories/create-category`
- **Get All Categories**: `GET /api/v1/categories`
- **Get a Single Category**: `GET /api/v1/categories/4f48c613-ee65-4bbf-bef8-e913936c71d3`
  - Description: Retrieves a category by its ID from the database.
- **Update a Category**: `PATCH /api/v1/categories/4f48c613-ee65-4bbf-bef8-e913936c71d3`
- **Delete a Category**: `DELETE /api/v1/categories/4f48c613-ee65-4bbf-bef8-e913936c71d3`
  - Description: Deletes a category by its ID from the database.

### Books

- **Create a Book**: `POST /api/v1/books/create-book`
- **Get All Books**: `GET /api/v1/books`
- **Get Books by Category**: `GET /api/v1/books/a212aa85-cb71-4995-aec6-d4cc23eaf9f6/category`
  - Description: Retrieves books belonging to a specific category.
- **Get a Single Book**: `GET /api/v1/books/a212aa85-cb71-4995-aec6-d4cc23eaf9f6`
  - Description: Retrieves a book by its ID from the database.
- **Update a Book**: `PATCH /api/v1/books/a212aa85-cb71-4995-aec6-d4cc23eaf9f6`
- **Delete a Book**: `DELETE /api/v1/books/a212aa85-cb71-4995-aec6-d4cc23eaf9f6`
  - Description: Deletes a book by its ID from the database.

### Orders

- **Create an Order**: `POST /api/v1/orders/create-order`
- **Get All Orders**: `GET /api/v1/orders`
- **Get a Single Order**: `GET /api/v1/orders/d091a453-1219-42fc-92fb-b2681f04dfea`
  - Description: Retrieves an order by its ID from the database.

### Bonus Part

- **Get single order by Id**: `POST /api/v1/orders/d091a453-1219-42fc-92fb-b2681f04dfea`
- **Get User Profile Data**: `GET /api/v1/users/profile`

## Usage

Provide instructions on how to use these endpoints, including any required headers or request payloads.

## License

This project is licensed under the [MIT License](LICENSE).
