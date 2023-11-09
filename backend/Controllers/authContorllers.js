import UserModel from "../Models/UserModel.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js"

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
        const user = await UserModel.findOne({ email: req.body.email } || { username: req.body.username });
        if (!user) {
            next(createError(404, "User not found"))
            return
        };

        const isCorrect = await bcryptjs.compare(req.body.password, user.password);
        if (!isCorrect) {
            next(createError(400, "Incorrect email or password"))
            return
        };

        const token = jwt.sign({ id: user._id }, process.env.JWT);
        // console.log(token, "===> access token from signin");
        const { password, ...other } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).send({
            status: "Success",
            message: "User sign in successfully",
            data: other
        });

    } catch (error) {
        next(createError(error.status, error.message))
    }
}