var mongoose= require("mongoose")
const { ObjectId } = require('mongodb');

const inmobiliariaEsquema = mongoose.Schema({

    descripcion: String,

    tipo: String,

    ubicacion:  { type: mongoose.Schema.ObjectId, ref: "ubicaciones" },

    direccion: String,

    nroHabitaciones: String,

    precio: String,

    imagen: String

    })
    module.exports= mongoose.model('inmuebles', inmobiliariaEsquema)