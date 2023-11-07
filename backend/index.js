import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './Routes/auth.js';
import usersRoutes from './Routes/users.js';
import hotelsRoutes from './Routes/hotels.js';
import roomsRoutes from './Routes/rooms.js';

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

app.use('/api/auth', authRoutes)
app.use('/api/hotels', hotelsRoutes)
app.use('/api/rooms', roomsRoutes)
app.use('/api/users', usersRoutes)

app.listen(PORT, () => {
    console.log("listening to port", PORT);
    connect()
})