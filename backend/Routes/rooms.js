import express from 'express';

const roomsRoutes = express.Router();

roomsRoutes.get('/', (req, res) => {
    res.send("This is rooms route")
})

export default roomsRoutes