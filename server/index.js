import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import multer from 'multer';
import path from 'path';
import Post from './models/Post.js';
import { posts } from './data/index.js';

import { fileURLToPath } from 'url';
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";


import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(morgan('common'));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//File upload and saving
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/assets');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });


//Routes with file 

app.post("/auth/register", upload.single('picture'), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);

//Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

//Mongoose setup

mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        // inserting dummy data for testing
        // Post.insertMany(posts);
        // User.insertMany(users);

    });
}).catch((err) => console.log(err));
