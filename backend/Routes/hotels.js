import express from 'express';

const hotelsRoutes = express.Router();

hotelsRoutes.get('/', (req, res) => {
    res.send("This is hotels route")
})

export default hotelsRoutes