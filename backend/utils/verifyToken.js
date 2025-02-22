import jwt from 'jsonwebtoken';
import { createError } from './error.js'

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "You are not authenticated!!"))
    }
    jwt.verify(token, process.env.JWT, (err, user) => {
        console.log(user)
        if (err) {
            return next(createError(403, "Invaild token!!"))
        }
        req.user = user
        console.log(user)
        next();
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.role === 'admin' || 'super-admin') {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.role === 'admin' || 'super-admin') {
            next()
        } else {
            return next(createError(403, "You are not authorized!!"))
        }
    })
}