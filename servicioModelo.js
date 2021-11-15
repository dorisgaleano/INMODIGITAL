var modeloUsuario = require('./usuario')
var modeloInmuebeles = require('./inmuebles')
let express = require('express')

 
require('./conexion')
//var modelo2=require('./zonas')
const app = new express();


//app.post("/", (req, res) => {

var myobj = {
  nombres: "Alexander", apellidos: "Administrador",
  usuario: "767776677", contraseña: "ss", cedula: "ss",
  correo: "ss", rol: "ss"
};


modeloUsuario.collection.insertOne(myobj, function (err, res) {
  if (err) throw err;
  console.log("1 documento insertado");

})


 //})