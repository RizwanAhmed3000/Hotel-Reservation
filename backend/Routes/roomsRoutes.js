import express from 'express';
import { createRoom, deleteRoom, getAllRoom, getSingleRoom, updateRoom } from '../Controllers/roomsControllers.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const roomsRoutes = express.Router();

// CREATE
roomsRoutes.post('/', verifyAdmin, createRoom)

// UPDATE
roomsRoutes.put('/:id', verifyAdmin, updateRoom)

// DELETE
roomsRoutes.delete('/:id', verifyAdmin, deleteRoom)

// GET
roomsRoutes.get('/:id', getSingleRoom)

// GET ALL
roomsRoutes.get('/', getAllRoom)

export default roomsRoutes