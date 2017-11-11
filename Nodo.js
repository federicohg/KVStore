const http = require('http');

//API REST
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());

//Nodo
let NodoWorker = require('./modules/NodoWorker');

if(process.argv.length !== 3) {
	console.error('Faltan parámetros: node Nodo.js <puerto>');
	process.exit();
}

let port = process.argv[2];
NodoWorker.init(app, port);
console.log('Nodo iniciado en puerto '+port);