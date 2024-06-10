import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,  //username should be unique for every user
    },
    email: {
        type: String,
        required: true,
        unique: true,  //e-mail should be unique for every user
    },
    password: {
        type: String,
        required: true,
    },

},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;