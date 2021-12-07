const express = require("express");
const { createReadStream } = require('fs')
var modelo = require('./usuario')
var modeloUbicacion = require('./ubicacion')
var modeloInmueble = require('./inmuebles')

const cors = require('cors');


const app = new express();
const HTML_CONTENT_TYPE = 'text/html'

const bodyParser = require("body-parser");


app.use(bodyParser.json());


const path = require("path");

app.use(cors())


require('./conexion')



app.post("/login", (req, res) => {
  modelo.find({ usuario: req.body.usuario, contrasena: req.body.contrasena }, (err, doc) => {
    if (err) throw err;

    if (doc[0]) {
      res.send({ logueado: "logueado", usuario: doc[0].usuario, rol: doc[0].rol })
    } else {
      res.send({ logueado: "no logueado" })
    }
  })
})

app.post("/registrarUsuario", (req, res) => {
  var myobj = { nombres: req.body.nombres, apellidos: req.body.apellidos, cedula: req.body.cedula, nombre_usuario: req.body.nombre_usuario, correo: req.body.correo, clave: req.body.clave, rol: req.body.rol };
  modelo.collection.insertOne(myobj, function (err, res) {
    if (err) throw err;

  })
  res.send({ estado: "creado" })
})

app.get("/listadoUbicaciones", (req, res) => {
  modeloUbicacion.find({}, (err, docs) => {
    res.send(docs);
  })
})

app.get("/consultaInmuebles", (req, res) => {

  modeloInmueble.find({  }, function (err, inmuebles) {
    modeloUbicacion.populate(inmuebles, { path: "ubicacion" }, function (err, inmuebles) {
            res.end(JSON.stringify(inmuebles))
    });

  })

})

app.post("/insertarInmueble", (req, res) => {
  var myobj = { descripcion: req.body.descripcion, tipo: req.body.tipo, ubicacion: req.body.ubicacion, direccion: req.body.direccion, nroHabitaciones: req.body.nroHabitaciones, precio: req.body.precio, imagen: req.body.imagen };
  modeloInmueble.collection.insertOne(myobj, function (err, res) {
    if (err) throw err;

  })
  res.send({ estado: "creado" })
})


app.post("/RegistrarUbicacion", (req, res) => {
  var myobj = { zona: req.body.zona, barrio: req.body.barrio };
  modeloUbicacion.collection.insertOne(myobj, function (err, res) {
    if (err) throw err;

  })
  res.send({ estado: "creado" })
})





app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })


  createReadStream('./Client/index.html').pipe(res)
  //createReadStream('./ejercicio.html').pipe(res)
  //res.end("hola mundo");

})


app.listen(9000, () => {

  console.log("aplicacion corriendo en el puerto 9000")

})





