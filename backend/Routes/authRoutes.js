import express from 'express';
import { login, signUp } from '../Controllers/authContorllers.js';

const authRoutes = express.Router();

// REGISTER USER
authRoutes.post('/register', signUp)

// LOGIN USER
authRoutes.post('/login', login)

export default authRoutes