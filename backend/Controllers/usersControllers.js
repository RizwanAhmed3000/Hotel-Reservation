import User from "../Models/UserModel.js"


// UPDATE A USER
// http://localhost:8800/api/users/:userId
export async function updateUser(req, res, next) {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true })
        res.status(200).send({
            status: "success",
            message: "User Updated",
            data: updatedUser
        })
    } catch (error) {
        next(error)
    }
}

// DELETE A USER
// http://localhost:8800/api/users/:userId
export async function deleteUser(req, res, next) {
    try {
        const userToDelete = await User.findById(req.params.userId)
        if (!userToDelete) {
            res.status(404).send({
                status: "failed",
                message: "user not found"
            })
        } else {
            await userToDelete.deleteOne()
            res.status(200).send({
                status: "success",
                message: "User deleted"
            })
        }
    }
    catch (error) {
        next(error)
    }
}

//GET A SINGLE USER
// http://localhost:8800/api/users/:userId
export async function getSingleUser(req, res, next) {
    try {
        const singleUser = await User.findById(req.params.userId)
        const { password, isAdmin, ...other } = singleUser._doc;
        res.status(200).send({
            status: "success",
            message: "user found",
            data: other
        })
    } catch (error) {
        next(error)
    }
}

// GET ALL USER
// http://localhost:8800/api/users/
export async function getAllUser(req, res, next) {
    try {
        let allUser = await User.find()
        let users = [];
        allUser.map((user) => {
            const { _id, username, email, country, city, img, role, phoneNumber } = user
            users.push({ _id, username, email, country, city, img, role, phoneNumber })
        });
        res.status(200).send({
            status: "success",
            message: "List of all Users",
            data: users
        })
    } catch (error) {
        next(error)
    }
}

