import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../Controllers/usersControllers.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const usersRoutes = express.Router();

usersRoutes.get('/checktoken', verifyToken, (req, res, next) => {
    res.send('you are logged in')
})

usersRoutes.get('/checkuser/:id', verifyUser, (req, res, next) => {
    res.send('hello user you are authenticated')
})

usersRoutes.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
    res.send('hello admin you are authenticated')
})

// UPDATE
usersRoutes.put('/:userId', verifyUser, updateUser)

// DELETE
usersRoutes.delete('/:userId', verifyUser, deleteUser)

// GET
usersRoutes.get('/:userId', verifyUser, getSingleUser)

// GET ALL
usersRoutes.get('/', verifyAdmin, getAllUser)


export default usersRoutes