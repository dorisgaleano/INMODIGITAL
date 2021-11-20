const express = require("express");
const { createReadStream } = require('fs')
var modelo = require('./usuario')
var modeloUbicacion = require('./ubicacion')
var modeloInmueble = require('./inmuebles')

//var qs=require("querystring")
//var body_parser = require('body-parser');


const app = new express();
const HTML_CONTENT_TYPE = 'text/html'

//app.use(body_parser.urlencoded({extended:true}));
/*
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
*/
const bodyParser = require("body-parser");
app.use(bodyParser.json());



app.use(express.static("Client"));
app.use(express.static("node_modules"));


const path = require("path");
var modeloUsario = require('./inmuebles')


require('./conexion')
//var modelo2=require('./zonas')



app.post("/insertar", (req, res) => {
  var myobj = { nombres: req.body.nombres, apellidos: req.body.apellidos, cedula: req.body.cedula, nombre_usuario: req.body.nombre_usuario, correo: req.body.correo, clave: req.body.clave, rol: req.body.rol };
  modelo.collection.insertOne(myobj, function (err, res) {
    if (err) throw err;

  })
  res.send("Usuario creado")
})

app.get("/listadoUbicaciones", (req, res) => {
  modeloUbicacion.find({}, (err, docs) => {
    res.send(docs);
  })
})

app.post("/insertarInmueble", (req, res) => {
  var myobj = { descripcion: req.body.descripcion, tipo: req.body.tipo, ubicacion: req.body.ubicacion, direccion: req.body.direccion, nroHabitaciones: req.body.nroHabitaciones, precio: req.body.precio, imagen: req.body.imagen };
  modeloInmueble.collection.insertOne(myobj, function (err, res) {
    if (err) throw err;

  })
  res.send("Inmueble creado")
})


app.post("/RegistrarUbicacion", (req, res) => {
  var myobj = { zona: req.body.zona, barrio: req.body.barrio };
  modeloUbicacion.collection.insertOne(myobj, function (err, res) {
    if (err) throw err;

  })
  res.send("Ubicación creada")
})



app.post("/login", (req, res) => {


  modelo.find({ usuario: req.body.usuario, contrasena:req.body.contrasena }, (err, doc) => {
    if (err) throw err;
    if (doc[0]) {
        res.send("logueado")
    }else{
      res.send("No logueado")
    }
  })
})




/*
modeloUsario.find({}, (erzr, docs) => {

     console.log(docs[2].nombre)

})
*/
//})

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })


  createReadStream('./Client/index.html').pipe(res)
  //createReadStream('./ejercicio.html').pipe(res)
  //res.end("hola mundo");

})


app.listen(9000, () => {

  console.log("aplicacion corriendo en el puerto 9000")

})





