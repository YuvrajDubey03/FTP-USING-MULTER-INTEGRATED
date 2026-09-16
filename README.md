# 📤 File Upload Project

A full-stack **File Upload application** built using **React, React Hook Form, Axios, Node.js, Express.js, and Multer**.

The project demonstrates how data and image files can be collected from a React frontend and sent to an Express backend using `multipart/form-data`. Multer is used on the backend to receive and handle the uploaded file.

---

## 🚀 Features

* 📝 Collect user information through a React form
* 🖼️ Select/upload an image from the frontend
* ⚛️ React-based frontend
* 📋 Form handling using **React Hook Form**
* 📦 Send form data and image using **FormData**
* 🔗 API communication using **Axios**
* 🛠️ Express.js backend
* 📤 Handle image uploads using **Multer**
* 🌐 CORS enabled for frontend-backend communication

---

## 🏗️ Project Structure

```text
File-Upload/
│
├── client/
│   ├── src/
│   │   └── App.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── server/
    ├── src/
    │   ├── app.js
    │   ├── server.js
    │   ├── routes/
    │   ├── controllers/
    │   └── config/
    │       └── multer/
    │
    └── package.json
```

---

## 🔄 How the Project Works

The application follows this flow:

```text
User
  ↓
React Form
  ↓
React Hook Form
  ↓
FormData
  ↓
Axios
  ↓
Express Server
  ↓
Multer
  ↓
req.body + req.file
```

### 1. Frontend

The user enters the required information and selects an image through the React form.

**React Hook Form** is used to manage the form and its submission.

### 2. FormData

The form information and image are packed into a `FormData` object.

```text
FormData
├── User Information
└── Image File
```

This allows both normal form fields and binary files to be sent in the same HTTP request.

### 3. Axios

Axios sends the `FormData` from the React frontend to the Express backend.

### 4. Express

The Express server receives the request and passes it through the appropriate route/controller.

### 5. Multer

Multer handles the `multipart/form-data` request and makes the uploaded data available to the backend.

Conceptually:

```js
req.body
```

contains the normal form information.

And:

```js
req.file
```

contains the uploaded file when a single-file upload middleware is used.

---

## 🛠️ Technologies Used

### Frontend

* React
* Vite
* React Hook Form
* Axios
* JavaScript

### Backend

* Node.js
* Express.js
* Multer
* CORS

---

## 📦 Installation

### Clone the repository

```bash
git clone <your-repository-url>
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

Open another terminal:

```bash
cd server
npm install
node server.js
```

The backend runs on:

```text
http://localhost:3000
```

---

## 📤 File Upload Concept

The important concept demonstrated by this project is:

```text
React
  ↓
FormData
  ↓
Axios
  ↓
multipart/form-data
  ↓
Express
  ↓
Multer
  ↓
Uploaded File
```

Multer is responsible for **receiving and processing the uploaded file from the request**.

It does not automatically mean that the image is stored permanently in a database or cloud service. Permanent storage depends on the storage configuration and the remaining backend code.

---

## 🎯 Learning Objectives

This project helps understand:

* React form handling
* React Hook Form
* File input handling
* FormData
* `multipart/form-data`
* Axios POST requests
* Express routes
* Controllers
* Middleware
* Multer
* `req.body`
* `req.file`
* Client-server communication
* CORS

---

## 👨‍💻 Author

**Yuvraj Dubey**

MCA Student | MERN Stack / Full-Stack Web Development Learner

---

## 📌 Note

This project is created for learning and practicing **file upload and client-server communication using the MERN/Node.js ecosystem**.
