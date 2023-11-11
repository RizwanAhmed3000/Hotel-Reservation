import express from 'express';
import { createHotel, deleteHotel, getAllHotel, getSingleHotel, updateHotel } from '../Controllers/hotelsControllers.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const hotelsRoutes = express.Router();

// CREATE
hotelsRoutes.post('/', verifyAdmin, createHotel)

// UPDATE
hotelsRoutes.put('/:hotelId', verifyAdmin, updateHotel)

// DELETE
hotelsRoutes.delete('/:hotelId', verifyAdmin, deleteHotel)

// GET
hotelsRoutes.get('/:hotelId', getSingleHotel)

// GET ALL
hotelsRoutes.get('/', getAllHotel)

export default hotelsRoutes