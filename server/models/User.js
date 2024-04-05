import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastname: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        picture: {
            type: String,
            default: "",
        },
        friends: {
            type: Array,
            default: [],
        },
        location: {
            type: String,
            max: 50,
        },
        occupation: {
            type: String,
            max: 50,
        },
        viewedProfile: {
            type: Number,
        },
        impressions: {
            type: Number,
        },


    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;