import UserModel from "../Models/UserModel.js"


// UPDATE A USER
// http://localhost:8800/api/users/:userId
export async function updateUser(req, res, next) {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true })
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
        const userToDelete = await UserModel.findById(req.params.userId)
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
        const singleUser = await Hotel.findById(req.params.userId)
        res.status(200).send({
            status: "success",
            message: "user found",
            data: singleUser
        })
    } catch (error) {
        next(error)
    }
}

// GET ALL USER
// http://localhost:8800/api/users/
export async function getAllUser(req, res, next) {
    try {
        const allUser = await UserModel.find()
        res.status(200).send({
            status: "success",
            message: "List of all Users",
            data: allUser
        })
    } catch (error) {
        next(error)
    }
}

