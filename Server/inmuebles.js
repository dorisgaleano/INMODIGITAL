var mongoose= require("mongoose")
const { ObjectId } = require('mongodb');

const inmobiliariaEsquema = mongoose.Schema({

    descripcion:{
        type: String
    },

    tipo:{
        type: String
    },

    ubicacion:{
        type: ObjectId
    },

    direccion: {
        type: String
    },

    nroHabitaciones:{
        type: String
    },

    precio: {
        type: String
    },

    imagen:{
        type: String
    }


    })
    module.exports= mongoose.model('inmuebles', inmobiliariaEsquema)