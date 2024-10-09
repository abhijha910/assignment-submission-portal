# Assignment Submission Portal

## Scenario

This assignment submission portal supports two types of users: **Users** and **Admins**.

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

## How to Set Up the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhijha910/assignment-submission-portal.git
   cd assignment-submission-portal

2. Navigate to the Project Directory: Change to the project directory:
   ```bash
   cd assignment-submission-portal
   
3. Install Required Dependencies: Ensure you have Node.js installed. Then, install the required dependencies by running: 
   ```bash
    npm install
   
4. Configure the Database: Open the config/db.js file and update the MongoDB connection string as needed to point to your running MongoDB instance.

5. Start the Server: Run the server using:
   ```bash
    node server.js

7. Test the API: Use tools like Postman or Insomnia to interact with the API endpoints.
