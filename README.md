🔐 Authentication System using JWT

A secure Authentication System built using Node.js, Express.js, MongoDB Atlas, JWT, HTML, CSS, and JavaScript. The application allows users to register, log in, access protected routes, and manage sessions using JSON Web Tokens (JWT).

📌 Features
User Registration
User Login
Password Hashing with bcryptjs
JWT-based Authentication
Protected Dashboard Route
Session Management using Local Storage
Logout Functionality
MongoDB Atlas Integration
Responsive UI Design
Frontend Deployment on Vercel
Backend Deployment on Render
🛠️ Tech Stack
Frontend
HTML5
CSS3
JavaScript (Vanilla JS)
Backend
Node.js
Express.js
Database
MongoDB Atlas
Mongoose
Authentication
JSON Web Token (JWT)
bcryptjs
Deployment
Vercel (Frontend)
Render (Backend)
📂 Project Structure
authentication-system/
│
├── backend/
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── login.js
│   │   ├── register.js
│   │   └── dashboard.js
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   └── dashboard.html
│
├──screenshots
|
└── README.md


⚙️ Installation
1. Clone the Repository
git clone <repository-url>
cd authentication-system
2. Install Backend Dependencies
cd backend
npm install
3. Create Environment Variables

Create a .env file inside the backend folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
4. Start Backend Server
npm run dev

Server runs at:

http://localhost:5000
5. Run Frontend

Open frontend/index.html using Live Server or a browser.

🔑 API Endpoints
Register User
POST /api/auth/register

Request Body:

{
  "username": "john",
  "email": "john@gmail.com",
  "password": "123456"
}
Login User
POST /api/auth/login

Request Body:

{
  "email": "john@gmail.com",
  "password": "123456"
}

Response:

{
  "token": "jwt_token",
  "username": "john"
}
Protected Dashboard Route
GET /api/auth/dashboard

Headers:

Authorization: jwt_token

Response:

{
  "message": "Welcome to Dashboard",
  "userId": "user_id"
}
📸 Screenshots
Register Page

Login Page

Dashboard

MongoDB Atlas Collection

Render Deployment

Vercel Deployment

🚀 Deployment Links
Frontend
https://authentication-system-vert.vercel.app
Backend
https://authentication-system-p0gd.onrender.com
🎯 Learning Outcomes
Implemented secure user authentication using JWT.
Learned password encryption using bcryptjs.
Built protected API routes with middleware.
Integrated MongoDB Atlas cloud database.
Deployed full-stack applications using Render and Vercel.
Managed user sessions using Local Storage.
👨‍💻 Author

A. Mohan Vamsi

B.Tech Student | Web Development Intern

GitHub: https://github.com/A-MOHAN-VAMSI
