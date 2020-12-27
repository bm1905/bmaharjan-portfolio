const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    ip: {
        type: String
    },
    carrier: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    region: {
        type: String
    },
    postal: {
        type: String
    },
    time: {
        type: String
    },
    count : {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('User', userSchema);