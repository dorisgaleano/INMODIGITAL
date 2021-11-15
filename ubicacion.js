var mongoose = require('mongoose');

const userscheme=new mongoose.Schema(
    {
        departamento: {
            type: String
            },
        ciudad: {
            type: String
            },
        barrio: {
            type: String
            }
    }
    )

    module.exports= mongoose.model('ubicacion', userscheme)