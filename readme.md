# Recipe Task

This project is a simple RESTful API for managing recipes using Node.js, Express, and MongoDB. You can perform CRUD operations like fetching all recipes, retrieving a specific recipe by ID, creating, updating, and deleting recipes.

## API Documentation

You can find the full API documentation [here](https://documenter.getpostman.com/view/39470028/2sAYBREt5V).

## Endpoints

### Recipe Endpoints
- **GET** `/api/v1/recipes`  
  Gets all recipes.

- **GET** `/api/v1/recipes/{_id}`  
  Retrieves a specific recipe by its ID.

- **POST** `/api/v1/recipes`  
  Creates a new recipe.

- **PUT** `/api/v1/recipes/{_id}`  
  Updates a recipe by its ID.

- **DELETE** `/api/v1/recipes/{_id}`  
  Deletes a recipe by its ID.

## Installation and Setup

Follow these steps to set up and run the project locally:

1. **Clone the repository**  
   ```bash
   git clone <repository-url>
   cd <repository-folder>

2. **Install dependencies**
    npm install

3. **Environment variables**
    MONGO_URL=`mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<db_name>`

4. **Start the server**
    npm start

5. **How to Use**

- Run the Server
- Start the server using the instructions above.
- Access the API
- Use tools like Postman or curl to test the API endpoints.

6. **Example Requests**

- Fetch all recipes
GET http://localhost:3001/api/v1/recipes

7. **Technologies Used**

Backend: Node.js, Express.js
Database: MongoDB
Environment Variables: dotenv
Testing: Postman


