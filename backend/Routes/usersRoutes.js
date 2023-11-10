import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../Controllers/usersControllers.js';

const usersRoutes = express.Router();

// UPDATE
usersRoutes.put('/:userId', updateUser)

// DELETE
usersRoutes.delete('/:userId', deleteUser)

// GET
usersRoutes.get('/:userId', getSingleUser)

// GET ALL
usersRoutes.get('/', getAllUser)


export default usersRoutes