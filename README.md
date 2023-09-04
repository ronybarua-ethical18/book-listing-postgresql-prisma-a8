# Book Listing Backend with Postgresql Prisma and Express

## Live Link

- [Live Link](https://example.com)

## Application Routes

### User

- **Signup**: `POST /api/v1/auth/signup`
- **Get All Users**: `GET /api/v1/users`
- **Get a Single User**: `GET /api/v1/users/36a2be79-0c17-441f-a5d3-467a255f2f34`
  - Description: Retrieves a user by their ID from the database.
- **Update a User**: `PATCH /api/v1/users/36a2be79-0c17-441f-a5d3-467a255f2f34`
- **Delete a User**: `DELETE /api/v1/users/36a2be79-0c17-441f-a5d3-467a255f2f34`
  - Description: Deletes a user by their ID from the database.
- **Get User Profile**: `GET /api/v1/users/profile`

### Category

- **Create a Category**: `POST /api/v1/categories/create-category`
- **Get All Categories**: `GET /api/v1/categories`
- **Get a Single Category**: `GET /api/v1/categories/05903153-f83e-4670-931c-5a594ad98682`
  - Description: Retrieves a category by its ID from the database.
- **Update a Category**: `PATCH /api/v1/categories/05903153-f83e-4670-931c-5a594ad98682`
- **Delete a Category**: `DELETE /api/v1/categories/05903153-f83e-4670-931c-5a594ad98682`
  - Description: Deletes a category by its ID from the database.

### Books

- **Create a Book**: `POST /api/v1/books/create-book`
- **Get All Books**: `GET /api/v1/books`
- **Get Books by Category**: `GET /api/v1/books/05903153-f83e-4670-931c-5a594ad98682/category`
  - Description: Retrieves books belonging to a specific category.
- **Get a Single Book**: `GET /api/v1/books/05d19e26-4339-4fc8-b95c-54adf9470058`
  - Description: Retrieves a book by its ID from the database.
- **Update a Book**: `PATCH /api/v1/books/05d19e26-4339-4fc8-b95c-54adf9470058`
- **Delete a Book**: `DELETE /api/v1/books/05d19e26-4339-4fc8-b95c-54adf9470058`
  - Description: Deletes a book by its ID from the database.

### Orders

- **Create an Order**: `POST /api/v1/orders/create-order`
- **Get All Orders**: `GET /api/v1/orders`
- **Get a Single Order**: `GET /api/v1/orders/4b8623d7-bded-4e12-9aeb-ed780ed8df35`
  - Description: Retrieves an order by its ID from the database.

### Bonus Part

- **Get single order by Id**: `POST /api/v1/orders/4b8623d7-bded-4e12-9aeb-ed780ed8df35`
- **Get User Profile Data**: `GET /api/v1/users/profile`

## Usage

Provide instructions on how to use these endpoints, including any required headers or request payloads.

## License

This project is licensed under the [MIT License](LICENSE).
