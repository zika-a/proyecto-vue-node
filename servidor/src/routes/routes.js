const express = require('express');

const routes = express.Router();

const {listarById} = require('../controllers/controller');

//Creación de las rutas
routes.get("/boardgame/:id", listarById);

module.exports = routes;