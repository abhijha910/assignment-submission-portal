# Assignment Submission Portal

## Scenario

The **Assignment Submission Portal** is a web application designed to facilitate the submission and management of assignments for users and admins. This platform supports two primary user roles: **Users** who can upload their assignments and **Admins** who have the authority to review, accept, or reject those submissions. 

With a focus on user-friendly interactions, the portal ensures a streamlined experience for both parties. Users can easily register, log in, and submit their assignments, while admins have access to a comprehensive view of the assignments associated with them. This system is built on a robust backend powered by **Node.js** and uses **MongoDB** for data storage, ensuring scalability and reliability.

- **Users** can upload assignments, represented by objects like the following:
    ```json
    {
        "userId": "Soumik",
        "task": "Hello World",
        "admin": "Alok"
    }
    ```

- **Admins** can view, accept, or reject assignments submitted by users. They have access to see assignments tagged to them along with user details, task descriptions, and timestamps.

## Requirements

1. **Database:**
   - MongoDB is used as the database for storing user and assignment data.

2. **Functionality:**
   - Users can:
     - Register and log in.
     - Upload assignments.
   - Admins can:
     - Register and log in.
     - View assignments associated with them.
     - Accept or reject assignments.

3. **Endpoints:**
   - **User Endpoints:**
     - `POST /register` - Register a new user.
     - `POST /login` - User login.
     - `POST /upload` - Upload an assignment.
     - `GET /admins` - Fetch all admins.
   - **Admin Endpoints:**
     - `POST /register` - Register a new admin.
     - `POST /login` - Admin login.
     - `GET /assignments` - View assignments tagged to the admin.
     - `POST /assignments/:id/accept` - Accept an assignment.
     - `POST /assignments/:id/reject` - Reject an assignment.

4. **Validation:**
   - All inputs are validated with appropriate error messages for invalid inputs.

5. **User Management:**
   - Proper user management is implemented, including (optional) OAuth2 for enhanced user authentication.

6. **Modularity:**
   - The code is modular, ensuring readability and maintainability.
  
  ## Project Structure
Assignment Submission Portal/
├── models/
│   ├── User.js
│   └── Assignment.js
├── routes/
│   ├── userRoutes.js
│   └── adminRoutes.js
├── controllers/
│   ├── userController.js
│   ├── adminController.js
├── middlewares/
│   └── auth.js
├── server.js
└── config/
    └── db.js

  
  ## How to Set Up and Run the Project

## Installation and Run the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhijha910/assignment-submission-portal.git
   cd assignment-submission-portal
2. **Navigate to the Project Directory: Change to the project directory:**
   ```bash
   cd assignment-submission-portal
       
3. **Install Required Dependencies: Ensure you have Node.js installed. Then, install the required dependencies by running:**
   ```bash
   npm install
       
4. **Configure the Database: Open the config/db.js file and update the MongoDB connection string as needed to point to your running MongoDB instance.**
    
5. **Start the Server: Run the server using:**
   ```bash
   node server.js
    
7. **Test the API: Use tools like Postman or Insomnia to interact with the API endpoints. You can send requests to the endpoints as specified in the requirements.**
