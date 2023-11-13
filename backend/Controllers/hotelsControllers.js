import Hotel from "../Models/HotelModel.js"

// CREATE A HOTEL
// http://localhost:8800/api/hotels/
export async function createHotel(req, res, next) {
    const newHotel = new Hotel(req.body);
    try {
        const saveHotel = await newHotel.save()
        res.status(200).send({
            status: "success",
            message: "Hotel registered",
            data: saveHotel
        })
    } catch (error) {
        next(error)
    }
}

// UPDATE A HOTEL
// http://localhost:8800/api/hotels/:hotelId
export async function updateHotel(req, res, next) {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.hotelId, { $set: req.body }, { new: true })
        res.status(200).send({
            status: "success",
            message: "Hotel Updated",
            data: updatedHotel
        })
    } catch (error) {
        next(error)
    }
}

// DELETE A HOTEL
// http://localhost:8800/api/hotels/:hotelId
export async function deleteHotel(req, res, next) {
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
        next(error)
    }
}

//GET A SINGLE HOTEL
// http://localhost:8800/api/hotels/find/:hotelId
export async function getSingleHotel(req, res, next) {
    try {
        const singleHotel = await Hotel.findById(req.params.hotelId)
        res.status(200).send({
            status: "success",
            message: "Hotel found",
            data: singleHotel
        })
    } catch (error) {
        next(error)
    }
}

// GET ALL HOTELS
// http://localhost:8800/api/hotels/
export async function getAllHotel(req, res, next) {
    try {
        const allHotels = await Hotel.find()
        res.status(200).send({
            status: "success",
            message: "List of all hotels",
            data: allHotels
        })
    } catch (error) {
        next(error)
    }
}

// GET ALL HOTELS
// http://localhost:8800/api/hotels/countbycity?cities=xyz,abc
export async function countByCity(req, res, next) {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map((city) => {
            return Hotel.countDocuments({ city: city })
        }))
        res.status(200).send({
            status: "success",
            message: "List of all hotels by city",
            data: list
        })
    } catch (error) {
        next(error)
    }
}

// Count by property type
// http://localhost:8800/api/hotels/countbytype
export async function countByType(req, res, next) {
    try {
        const hotelCount = await Hotel.countDocuments({ propertyType: "Hotel" })
        const apartmentCount = await Hotel.countDocuments({ propertyType: "Apartment" })
        const resortCount = await Hotel.countDocuments({ propertyType: "Resort" })
        const villaCount = await Hotel.countDocuments({ propertyType: "Villa" })
        const cabinCount = await Hotel.countDocuments({ propertyType: "Cabin" })
        res.status(200).send({
            status: "success",
            message: "Count by property type",
            data: [
                { type: "Hotels", count: hotelCount },
                { type: "Apartments", count: apartmentCount },
                { type: "Resorts", count: resortCount },
                { type: "Villas", count: villaCount },
                { type: "Cabins", count: cabinCount },
            ]
        })
    } catch (error) {
        next(error)
    }
}

