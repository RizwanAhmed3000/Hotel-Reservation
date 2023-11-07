import express from 'express';

const usersRoutes = express.Router();

usersRoutes.get('/', (req, res) => {
    res.send("This is users route")
})

export default usersRoutes