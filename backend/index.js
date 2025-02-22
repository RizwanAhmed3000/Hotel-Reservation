import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './Routes/authRoutes.js';
import usersRoutes from './Routes/usersRoutes.js';
import hotelsRoutes from './Routes/hotelsRoutes.js';
import roomsRoutes from './Routes/roomsRoutes.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const PORT = 8800;

dotenv.config();

const connect = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log(`connected to DB`);
        })
        .catch((err) => {
            throw err;
        });
};

// middleware
app.use(cookieParser())
app.use(express.json())
app.use(morgan('common'))
app.use(cors({
    origin: 'http://localhost:3001', // Your Next.js app domain
    credentials: true
}))

//Routes
app.use('/api/auth', authRoutes)
app.use('/api/hotels', hotelsRoutes)
app.use('/api/rooms', roomsRoutes)
app.use('/api/users', usersRoutes)

//Error middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).send({
        status: "falied",
        errorStatus: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(PORT, () => {
    console.log("listening to port", PORT);
    connect()
})