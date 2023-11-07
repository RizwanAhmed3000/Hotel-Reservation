import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';

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


app.listen(PORT, () => {
    console.log("listening to port", PORT);
    connect()
})