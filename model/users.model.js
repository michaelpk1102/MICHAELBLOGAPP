const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
   
    name: {
        type: String,
        required: 'Please enter your name',
        trim: true
    },
    email: {
        type: String,
        unique:true,
        required: 'Please enter your email',
        trim: true,
        lowercase:true,
        validate: [{ validator: value => isEmail(value), msg: 'Invalid email.' }]
    },
    password: { type: String, required: true },
    address: {
        type: String
    },
    phone: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const dataModel = mongoose.model("User", userSchema);

module.exports = dataModel;
