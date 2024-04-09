# Social Media App

## Description

This is a full-stack social media application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create accounts, post updates, follow other users, like and comment on posts, and more.

## Features

- User authentication: Users can sign up, log in, and log out securely.
- Added route protection,users cannot use the app unless they have proper credentials.
- Profile management: Users can view and update their profile.
- Posts: Users can create, view, edit, and delete posts.
- Follow system: Users can follow and unfollow other users.
- Likes and comments: Users can like and comment on posts.
- Notifications: Users receive notifications for new followers, likes, and comments.
- Responsive design: The app is fully responsive and works on desktop, tablet, and mobile devices.
- Added theme : users can switch between dark and light theme.

## Technologies Used

- Frontend:
  - React.js
  - React Router
  - Redux (for state management)
  - React Redux (for storing site state)
  - Material-UI (for UI components)
  - formik (for form data management)
  
- Backend:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose ORM)
  - JSON Web Tokens (JWT) for authentication
  - bcrypt: for hashing passwords securely.
  - body-parser: Middleware for parsing incoming request bodies in Express.js
  - cors: Middleware for enabling Cross-Origin Resource Sharing (CORS)
  - helmet: Middleware for adding various HTTP headers to enhance application security.
  - morgan: Middleware for logging HTTP requests in Express.js.
  - multer: Middleware for handling multipart/form-data, primarily used for file uploads.
    
- Additional tools:
  - Formik or Yup (for form handling and validation)


## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2.Navigate to the project directory:
```bash
cd social-media-app
```

3. Install dependencies for both frontend and backend:
Install backend dependencies
```bash
cd backend
npm install
```

Install frontend dependencies
```bash
cd ..
cd frontend
npm install
```

4. Start the backend server
 ```bash
npm start
```

6. Start the frontend development server:
```bash
npm start
```
<p>Some images from the working app.</p>

![image](https://github.com/ayushh1804/social_media_platform_mern/assets/88641651/0f7021db-076c-46b5-8541-703088d67d1d)
![image](https://github.com/ayushh1804/social_media_platform_mern/assets/88641651/357947c3-de99-4380-a363-8b7f3caf8204)
![image](https://github.com/ayushh1804/social_media_platform_mern/assets/88641651/078fee9d-f713-4d73-a273-4c6531f7bf08)
![image](https://github.com/ayushh1804/social_media_platform_mern/assets/88641651/2bed1c10-3be9-42cf-95ae-7c4ad5217796)

![image](https://github.com/ayushh1804/social_media_platform_mern/assets/88641651/cc8c9e59-121b-461e-a08c-b15254e54c54)

