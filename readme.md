# Assignment Submission Portal

## Project Description

The **Assignment Submission Portal** is a web application that allows users to upload assignments for review by admins. Admins can view, accept, or reject the submitted assignments. This project utilizes **Node.js**, **Express**, and **MongoDB** for the backend, providing a robust solution for managing assignment submissions efficiently.

## Summary
The Assignment Submission Portal is designed to streamline the process of submitting and reviewing assignments. Users can easily register, log in, and upload their assignments, while admins have a dedicated interface to manage these submissions. The application leverages modern web technologies, including Node.js, Express, and MongoDB, to provide a secure and efficient environment for both users and admins. With features like JWT-based authentication and password hashing, the portal ensures that user data is protected. This project not only showcases fundamental web development skills but also emphasizes the importance of user experience in educational environments.

## Features

- User registration and login.
- Assignment uploading by users.
- Admin registration and login.
- View assignments tagged to admins.
- Accept or reject assignments by admins.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for building the API.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB to simplify data modeling.
- **JSON Web Tokens (JWT)**: For secure user authentication.
- **Bcrypt.js**: For hashing passwords.

## Installation Instructions

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd assignment-portal

2. **Install dependencies:**
    npm install

3. **Set up MongoDB:**

    Create a .env file in the root of the project and add your MongoDB connection string and JWT secret:

PORT=5000
MONGODB_URI=<your-mongodb-uri> # Replace this with your MongoDB URI
JWT_SECRET=<your-jwt-secret>  # Replace this with your JWT secret

4. **Start the server:**
    npm start
API Endpoints
    User Endpoints
    POST /api/users/register

        Registers a new user.
        Request Body
            {
            "username": "soumik",
            "password": "password123"
            }
    
    POST /api/users/loginPOST /api/users/login

        Logs in a user and returns a JWT token.
        Request Body:
            {
            "username": "soumik",
            "password": "password123"
            }
    
    POST /api/users/upload
        Uploads an assignment.
        Request Body
            {
            "userId": "soumik",
            "task": "Hello World",
            "admin": "alok"
            }
            Authorization Header: Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDc3ZjlmNTg0NWY3YWI2MTBjZjIxNCIsImlhdCI6MTcyODU1MTc2OCwiZXhwIjoxNzI4NTU1MzY4fQ.jeYlNHaVqupmon8mdachTy1aM2WprcX_xkdzWsPQmQI
    
    Admin Endpoints
    POST /api/admins/register

        Registers a new admin.
        Request Body:
            {
            "username": "alok",
            "password": "adminpass"
            }
    
    POST /api/admins/login

        Logs in an admin and returns a JWT token.
        Request Body:
        {
        "username": "alok",
        "password": "adminpass"
        }

    GET /api/admins/assignments

        Fetches assignments tagged to the admin.
        Authorization Header: Bearer <admin_token>
        POST /api/admins/assignments/
        /accept

        Accepts an assignment by ID.
        Authorization Header: Bearer <admin_token>
        POST /api/admins/assignments/
        /reject

        Rejects an assignment by ID.
        Authorization Header: Bearer <admin_token>
        
## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JSON Web Tokens](https://jwt.io/)
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)

