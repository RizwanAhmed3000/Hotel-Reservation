import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    propertyType: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    distanceFromCityCenter: {
        type: String,
        required: true,
    },
    photos: {
        type: [String],
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String],
    },
    chipestPrice: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model('Hotel', HotelSchema)