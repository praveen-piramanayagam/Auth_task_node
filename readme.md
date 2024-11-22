## Auth task
# Recipe Task

Implement user authentication and authorization using http methods in a Node.js application with Express.js, Mongoose, and JWT. The application should follow the MVC pattern and include API documentation.


## API Documentation

You can find the full API documentation [here](https://documenter.getpostman.com/view/39470028/2sAYBSktYw).

## Endpoints

### Recipe Endpoints
- **POST** `/api/v1/auth/register`
  To register new users to a database using Postman, you can create a POST request to the /signup endpoint of your API. Ensure the payload includes user details like name,email,password.

- **POST** `/api/v1/auth/login`
  Login user by entering email and password

- **POST** `/api/v1/auth/logout`
  The logged userid will be as token and stored in cookies when user log out cookies will be removed

- **GET** `/api/v1/me`  
  To fetch which user logged in and their details we want to fetch.

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


6. **Technologies Used**

Backend: Node.js, Express.js
Database: MongoDB
Environment Variables: dotenv
Testing: Postman

