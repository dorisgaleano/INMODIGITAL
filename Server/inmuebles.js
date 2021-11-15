var mongoose= require("mongoose")

const inmobiliariaEsquema = mongoose.Schema({

    nombre:{
        type: String
    },

    tipo:{
        type: String
    },

    descripcion:{
        type: String
    },

    zona:{
        type: String
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