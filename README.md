## Project Overview

**Artify Backend** is a RESTful API built with **Node.js, Express.js, MongoDB, and Firebase Admin** to manage artwork, user galleries, and favorites.  
This backend powers a full-stack **MERN application** allowing users to upload, update, delete, and like artworks with authentication.

---

## Tech Stack & Tools

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** Firebase Admin
- **Others:** CORS, dotenv
- **Dev Tools:** VSCode, Postman

---

## Features

- Add, update, delete, and fetch artworks
- Fetch latest and public artworks
- Increase like count
- Add/remove artworks to/from favorites
- Get user-specific gallery
- JWT/Firebase authentication middleware for protected routes


## How to Run the Backend Server Locally

নিচের ধাপগুলো অনুসরণ করলে আপনি Artify Backend নিজের কম্পিউটারে রান করতে পারবেন।
---
### 1. Clone the Repository
### 3. Install Dependencies
       npm install
### 4. Create Environment File (.env)
প্রজেক্টের রুটে একটি .env ফাইল তৈরি করে নিচের ভ্যালুগুলো যোগ করুন:
       MONGO_URI=your_mongodb_connection_string

### 4. Start the Server
       node index.js

