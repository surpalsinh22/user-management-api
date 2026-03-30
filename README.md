#  User Management API

A backend project built using **Node.js, Express, and MongoDB** that performs full CRUD operations for managing users.

---

##  Features

* Create User
* Get All Users
* Update User
* Delete User
* RESTful API structure
* JSON request/response handling

---

##  Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Thunder Client

---

## Project Structure


user-management-api/
├── config/
│   └── db.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── app.js
├── server.js
├── package.json
└── .env (not included in repo)


---

##  Repository

https://github.com/surpalsinh22/user-management-api

---

##  Installation & Setup

### 1. Clone the repository


git clone https://github.com/surpalsinh22/user-management-api.git


### 2. Navigate to project


cd user-management-api


### 3. Install dependencies


npm install


---

##  Run the Project

### Development (using nodemon)


nodemon server.js


---

##  Environment Variables

Create a `.env` file in root folder and add:


PORT=3000
MONGO_URL=your_mongodb_connection_string


---

##  API Endpoints

### Create User

POST `/api/users/create`

### Get All Users

GET `/api/users`

### Update User

PUT `/api/users/update/:id`

### Delete User

DELETE `/api/users/delete/:id`

---

##  Testing

You can test APIs using:

* Thunder Client
* Postman

---

## Sample Response


{
  "_id": "12345",
  "name": "Surpal",
  "surname": "Ramlavat"
}


---

##  Author

**Surpalsinh Ramlavat**
GitHub: https://github.com/surpalsinh22

---

##  Note

This project is built to demonstrate backend development skills using Node.js, Express, and MongoDB.
