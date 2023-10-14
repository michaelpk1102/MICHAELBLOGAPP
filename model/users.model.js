const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    // image: {
    //     type: String,
    //     required: true,
    //     default: "default.png"
    // },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique:true,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    telPhone: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const dataModel = mongoose.model("User", userSchema);

module.exports = dataModel;
