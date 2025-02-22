import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
    img: {
        type: String,
        // required: true
    },
    phoneNumber: {
        type: String,
        // required: true
    },
    role: {
        type: String,
        Enum: ['user', 'hotel-owner', 'admin', 'super-admin'],
        default: 'user'
    },
}, { timestamps: true });

export default mongoose.model('User', UserSchema)