const { Schema, model } = require('mongoose');

const Card = require('../models/card');
const Prestamo = require('../models/prestamo');

const clientSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    cards: [Card]
},
    {
        timestamps: true
    });

module.exports = model('client', clientSchema);