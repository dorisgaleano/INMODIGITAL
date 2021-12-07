var mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const userscheme=new mongoose.Schema(
    {
        zona: String,
        barrio: String
    }
    )

    module.exports= mongoose.model('ubicaciones', userscheme)