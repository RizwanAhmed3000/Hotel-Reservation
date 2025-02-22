import express from 'express';
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotelRooms, getSingleHotel, updateHotel } from '../Controllers/hotelsControllers.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const hotelsRoutes = express.Router();

// CREATE
hotelsRoutes.post('/', verifyAdmin, createHotel) //

// UPDATE
hotelsRoutes.put('/:hotelId', verifyAdmin, updateHotel)

// DELETE
hotelsRoutes.delete('/:hotelId', verifyAdmin, deleteHotel)

// GET
hotelsRoutes.get('/find/:hotelId', getSingleHotel)

// GET ALL
hotelsRoutes.get('/', getAllHotel) //

// GET ALL BY CITY
hotelsRoutes.get('/countbycity', countByCity)

// GET ALL BY TYPE
hotelsRoutes.get('/countbytype', countByType)

// GET ALL BY TYPE
hotelsRoutes.get('/room/:hotelId', getHotelRooms)

export default hotelsRoutes