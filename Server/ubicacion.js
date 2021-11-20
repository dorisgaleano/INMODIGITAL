var mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const userscheme=new mongoose.Schema(
    {
        id: {
            type: ObjectId
            },
        zona: {
            type: String
            },
        barrio: {
            type: String
            }
    }
    )

    module.exports= mongoose.model('ubicacion', userscheme)