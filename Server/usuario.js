var mongoose = require('mongoose');
//Set up default mongoose connection
const userscheme = new mongoose.Schema(
    {
        nombres: {
            type: String
        },
        apellidos: {
            type: String
        },
        usuario: {
            type: String
        },
        contrasena: {
            type: String
        },
        cedula: {
            type: String
        },
        correo: {
            type: String
        },
        rol: {
            type: String
        }
    }

)
module.exports = mongoose.model('usuario', userscheme)