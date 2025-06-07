# ⚙️ Charging Station Backend API

This is the backend REST API for the Charging Station Management System. Built with Node.js, Express, MongoDB, and JWT-based authentication.


## 🔗 Live API Endpoint [https://charging-backend-6.onrender.com/]
🌐 [Backend API on Render]
> This backend is publicly accessible and used by the Vue frontend deployed on Vercel.


## 🧪 Test Credentials

```bash
Username: indhu
Password: indhu123

📌 Features
✅ User Registration & Login (JWT Auth)

✅ Password Hashing using bcrypt

✅ Protected Routes using JWT Middleware

✅ Charging Station CRUD:

Add new station

Update station

Delete station

Get all stations

✅ Deployed on Render with MongoDB Atlas

🔐 API Endpoints
🔑 Auth
Method	   Route	              Description
POST	/api/auth/register	   Register new user
POST	/api/auth/login 	   Login and get token

⚡ Charging Stations
Method	    Route	                  Description
GET 	   /api/stations	           Get all stations
POST	   /api/stations	           Add a new station
PUT	       /api/stations/:id	           Update a station
DELETE	   /api/stations/:id	       Delete a station

🔒 All station routes require a valid JWT token in the Authorization header.

🔧 Tech Stack
Node.js

Express.js

MongoDB Atlas

Mongoose

JWT Authentication

bcryptjs

dotenv

CORS

📁 Project Structure
backend/
├── models/
│   └── User.js
│   └── Station.js
├── routes/
│   └── auth.js
│   └── stations.js
├── controllers/
│   └── authController.js
├── server.js
├── .env
└── README.md

📦 Setup Instructions (For Local Development)

1. Clone the Repo & Install
npm install

2. Create .env File
PORT=5000
MONGO_URI=mongodb+srv://Indhu:Indhu.k0307@cluster0.pdhlobc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=umadevi

3. Run the Server
npm run dev

The server runs on:
https://charging-backend-6.onrender.com/
📍 http://localhost:5000

🔐 Example Authorization Header (Postman)

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4M2IyMTY1MjJhMzExZTUyNjJhY2JjZSIsImlhdCI6MTc0ODkxMTA4NCwiZXhwIjoxNzQ4OTk3NDg0fQ.vouMMO4_HbAb08FidXhmybQ0s0cjktLwoYcKOWpvu5k

Backend deployed on Render
Frontend deployed on Vercel

🧑‍💻 Author
Indhu – B.Tech CSE Final Year
Github-https://github.com/InduS37
