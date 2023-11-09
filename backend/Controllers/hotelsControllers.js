import Hotel from "../Models/Hotel.js"

export async function createHotel(req, res) {
    const newHotel = new Hotel(req.body);
    try {
        const saveHotel = await newHotel.save()
        res.status(200).send({
            status: "success",
            message: "Hotel registered",
            data: saveHotel
        })
    } catch (error) {
        res.status(500).send({
            status: "falied",
            message: error.message
        })
    }
}

export async function updateHotel(req, res) {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.hotelId, { $set: req.body }, { new: true })
        res.status(200).send({
            status: "success",
            message: "Hotel Updated",
            data: updatedHotel
        })
    } catch (error) {
        res.status(500).send({
            status: "falied",
            message: error.message
        })
    }
}

export async function deleteHotel(req, res) {
    try {
        const hotelToDelete = await Hotel.findById(req.params.hotelId)
        if (!hotelToDelete) {
            res.status(404).send({
                status: "failed",
                message: "Hotel not found"
            })
        } else {
            await hotelToDelete.deleteOne()
            res.status(200).send({
                status: "success",
                message: "Hotel deleted"
            })
        }
    }
    catch (error) {
        res.status(500).send({
            status: "falied",
            message: error.message
        })
    }
}

export async function getSingleHotel(req, res) {
    try {
        const singleHotel = await Hotel.findById(req.params.hotelId)
        res.status(200).send({
            status: "success",
            message: "Hotel found",
            data: singleHotel
        })
    } catch (error) {
        res.status(500).send({
            status: "falied",
            message: error.message
        })
    }
}

export async function getAllHotel(req, res) {
    try {
        const allHotels = await Hotel.find()
        res.status(200).send({
            status: "success",
            message: "List of all hotels",
            data: allHotels
        })
    } catch (error) {
        res.status(500).send({
            status: "falied",
            message: error.message
        })
    }
}

