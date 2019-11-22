const { Schema, model } = require('mongoose');

const prestamoSchema = new Schema({
    cantidad: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    });

module.exports = prestamoSchema;