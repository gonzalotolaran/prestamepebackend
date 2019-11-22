const { Schema, model } = require('mongoose');

const distributorSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    namestore: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    });

module.exports = model('distributor', distributorSchema);