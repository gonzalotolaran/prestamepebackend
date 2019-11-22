const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
    number: {
        type: String,
        required: true,
        maxlength: 16,
        unique: true
    },
    month: {
        type: String,
        required: true,
        maxlength: 2,
    },
    year: {
        type: String,
        required: true,
        maxlength: 2,
    },
    cvv: {
        type: String,
        required: true,
        maxlength: 3,
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    bank: {
        type: String,
        required: true,
        uppercase: true
    }
},
    {
        timestamps: true
    });

module.exports = cardSchema;