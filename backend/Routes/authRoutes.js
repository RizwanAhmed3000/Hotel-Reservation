import express from 'express';
import { forgotPassword, login, signUp } from '../Controllers/authContorllers.js';

const authRoutes = express.Router();

// REGISTER USER
authRoutes.post('/register', signUp)

// LOGIN USER
authRoutes.post('/login', login)

// LOGIN USER
authRoutes.get('/forgotpassword', forgotPassword)

export default authRoutes