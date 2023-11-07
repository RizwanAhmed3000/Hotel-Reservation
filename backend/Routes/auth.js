import express from 'express';

const authRoutes = express.Router();

authRoutes.get('/', (req, res) => {
    res.send("This is auth route")
})

export default authRoutes