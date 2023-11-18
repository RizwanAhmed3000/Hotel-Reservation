import Hotel from "../Models/HotelModel.js";
import Room from "../Models/RoomModel.js";

// CREATE A ROOMS
// http://localhost:8800/api/rooms/
export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save();
        await Hotel.findByIdAndUpdate(hotelId, {
            $push: { rooms: savedRoom?._id }
        })
        res.status(200).send({
            status: "success",
            message: "Room added to the hotel",
            data: savedRoom
        })
    } catch (error) {
        next(error)
    }
}

// UPDATE A ROOMS
// http://localhost:8800/api/rooms/:id
export async function updateRoom(req, res, next) {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).send({
            status: "success",
            message: "Room Updated",
            data: updatedRoom
        })
    } catch (error) {
        next(error)
    }
}

// UPDATE A ROOMS
// http://localhost:8800/api/rooms/available/:id
export async function updateRoomAvailability(req, res, next) {
    try {
        await Room.updateOne(
            { "roomNumber._id": req.params.id },
            {
                $push: {
                    "roomNumber.$.unavailableDates": req.body.dates
                },
            }
        );
        res.status(200).json("Room status has been updated.");
    } catch (error) {
        next(error)
    }
}

// DELETE A ROOMS
// http://localhost:8800/api/rooms/:id/:hotelId
export async function deleteRoom(req, res, next) {
    const hotelId = req.params.hotelId;
    try {
        const roomToDelete = await Room.findById(req.params.id)
        if (!roomToDelete) {
            res.status(404).send({
                status: "failed",
                message: "Room not found"
            })
        } else {
            await roomToDelete.deleteOne()
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id }
            })
            res.status(200).send({
                status: "success",
                message: "Room deleted"
            })
        }
    }
    catch (error) {
        next(error)
    }
}

//GET A SINGLE ROOMS
// http://localhost:8800/api/rooms/:id
export async function getSingleRoom(req, res, next) {
    try {
        const singleRoom = await Room.findById(req.params.id)
        res.status(200).send({
            status: "success",
            message: "Room found",
            data: singleRoom
        })
    } catch (error) {
        next(error)
    }
}

// GET ALL ROOMS
// http://localhost:8800/api/rooms/
export async function getAllRoom(req, res, next) {
    try {
        const allRoom = await Room.find()
        res.status(200).send({
            status: "success",
            message: "List of all Rooms",
            data: allRoom
        })
    } catch (error) {
        next(error)
    }
}

