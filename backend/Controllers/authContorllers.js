import UserModel from "../Models/UserModel.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js"
import nodemailer from "nodemailer"

export async function signUp(req, res, next) {
    try {

        // HASHING PASSWORD
        const salt = await bcryptjs.genSalt(15)
        const hashedPassword = await bcryptjs.hash(req.body.password, salt)

        const newUser = new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })

        const { password, ...other } = newUser._doc;

        await newUser.save()
        res.status(201).send({
            status: "success",
            message: "User registerd successfully",
            data: other
        })
    } catch (error) {
        next(error)
    }
}

export async function login(req, res, next) {
    try {
        const user = await UserModel.findOne({ username: req.body.username });
        if (!user) {
            next(createError(404, "User not found"))
            return
        };
        const isCorrect = await bcryptjs.compare(req.body.password, user.password);
        if (!isCorrect) {
            next(createError(400, "Incorrect email or password"))
            return
        };
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT, { expiresIn: '24h' });
        const { password, isAdmin, ...other } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).send({
            status: "Success",
            message: "User sign in successfully",
            data: other,
            access_token: token
        });
    } catch (error) {
        next(createError(error.status, error.message))
    }
}

export async function forgotPassword(req, res, next) {
    try {
        const { email } = req.body;
        if (email) {
            const user = await UserModel.findOne({ email: email })
            // console.log(user)
            if (user) {
                const secret = user._id + process.env.JWT
                const token = jwt.sign({ secret }, process.env.JWT, { expiresIn: "30m" })
                const link = `http:localhost:8800/api/auth/resetpassword/usertoken/${token}`
                const transport = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.NODEMAILER_USER,
                        pass: process.env.NODEMAILER_PASS
                    }
                })

                const mailOptions = {
                    from: "rizz112khan@gmail.com",
                    to: "rizz112khan@gmail.com",
                    subject: "reset password link",
                    text: `Please click on the following link ${link} to reset your password`
                }

                transport.sendMail(mailOptions, (err, info) => {
                    if (err) {
                        console.log(err.message)
                        return res.status(400).send({
                            status: "Failed",
                            message: err.message
                        })
                    } else {
                        console.log("email send" + info.response)
                        return res.status(200).send({
                            status: "Success",
                            message: "Reset password link generated"
                        })
                    }
                })
            }
        } else {
            console.log("no user found")
        }
    } catch (error) {
        next(createError(error.status, error.message))
    }
}