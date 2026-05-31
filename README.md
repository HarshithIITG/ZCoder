
# ZCoder

A interactive coding community platform to practise and scale up your skills.

## Live Demo
[Website](https://your-app.vercel.app/) | [Video Demo](https://drive.google.com/file/d/10rNcX1oot6aYd_PbwZib2L2BYr8D3DxZ/view?usp=sharing)

## How to Run locally
### first clone the repo
``` bash
git clone https://github.com/HarshithIITG/ZCoder.git
cd ZCoder
```
### run backend
``` bash
cd backend
npm i 
nodemon index.js
```
also create a new file called .env in the backend folder at the same level of index.js. The format for it is (see backend/.env.example for reference)
```
PORT = 5000
MONGODB_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_secret_key
GROQ_API_KEY = your_groq_api_key
FRONTEND_URL = http://localhost:3000
```
(Create your Groq key at https://console.groq.com/keys)

### run frontend
then open a new terminal and
```bash
cd frontend
npm i
npm start
```
also create a new file called .env in the frontend folder at the same level of src,public. The format for it is
```
REACT_APP_API_URL = https://alfa-leetcode-api.onrender.com
REACT_APP_BACKEND_URL = http://localhost:5000
REACT_APP_JUDGE = https://emkc.org/api/v2/piston/execute
```
Then visit http://localhost:3000

## Deploying to Production

### Backend (Render)
1. Go to [render.com](https://render.com) and create a free account
2. Click **New → Web Service** and connect your GitHub repo
3. Set the root directory to `backend`, build command to `npm install`, start command to `node index.js`
4. Add the following environment variables in the Render dashboard:
```
MONGODB_URI = your_atlas_connection_string
JWT_SECRET  = your_secret_key
GROQ_API_KEY = your_groq_api_key
FRONTEND_URL = https://your-app.vercel.app
```
5. Deploy — note the URL Render gives you (e.g. `https://zcoder-api.onrender.com`)

### Frontend (Vercel)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project** and import your `HarshithIITG/ZCoder` repository
3. Set the **Root Directory** to `frontend`
4. Add the following environment variables in Vercel's dashboard:
```
REACT_APP_API_URL     = https://alfa-leetcode-api.onrender.com
REACT_APP_BACKEND_URL = https://your-render-backend-url.onrender.com
REACT_APP_JUDGE       = https://emkc.org/api/v2/piston/execute
```
5. Click Deploy — Vercel will build and host your React app automatically

> **Note:** After deploying, update `FRONTEND_URL` in your Render backend to match your Vercel app's URL, then redeploy the backend.

## Features

**User Authentication**  
- Register and login system with hashed passwords using bcrypt and jwt

**Practice Problems**  
- with over 600+ problems to practise and run code and check

**Interactive rooms**  
- Rooms where people can join and interact with each other with realtime messages and common code editor

**Ask AI**  
- Using GroqAI API developed a fully functional chat bot that can help with doubts

**Discussions**  
- Area for a community to upload their solutions helping eachother and voting them

**Profile**
- Profile page to check your progress and also stalk your friends.

**Bookmarks**
- Page to bookmark important questions so that you can visit again.

## Technologies Used

| Tech | Description |
|------|-------------|
| **React** | Frontend UI framework |
| **Node/Express** | Backend API server |
| **Socket.IO** | Real-time communication |
| **MongoDB / Mongoose** | Database for storing users and messages |
| **Bcrypt** | Password hashing |
| **JWT** | Token based Authentication |
| **Groq (Llama 3.3)** | AI chat assistant |

###  Contact
If you have any questions or want help improving the app, feel free to reach out at [@HarshithIITG](https://github.com/HarshithIITG)
