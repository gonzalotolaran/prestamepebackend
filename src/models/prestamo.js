const { Schema, model } = require('mongoose');

const prestamoSchema = new Schema({
    cantidad: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        default: "pendiente",
        enum: ["pendiente", "completado"]
    },
    idCliente: {type: Schema.Types.ObjectId, ref: "client", required: true},
    idDistribuidor: {type: Schema.Types.ObjectId, ref: "distributor"},
},
    {
        timestamps: true
    });

module.exports = model('prestamo', prestamoSchema);