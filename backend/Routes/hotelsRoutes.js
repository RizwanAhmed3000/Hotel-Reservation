import express from 'express';
import { createHotel, deleteHotel, getAllHotel, getSingleHotel, updateHotel } from '../Controllers/hotelsControllers.js';

const hotelsRoutes = express.Router();

// CREATE
hotelsRoutes.post('/', createHotel)

// UPDATE
hotelsRoutes.put('/:hotelId', updateHotel)

// DELETE
hotelsRoutes.delete('/:hotelId', deleteHotel)

// GET
hotelsRoutes.get('/:hotelId', getSingleHotel)

// GET ALL
hotelsRoutes.get('/', getAllHotel)

export default hotelsRoutes