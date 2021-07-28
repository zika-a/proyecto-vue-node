const express = require('express');

const routes = express.Router();

const {listarById, actualizar} = require('../controllers/controller');

//Creación de las rutas
routes.get("/boardgame/:id", listarById);

routes.put("/boargame/:id", actualizar);

module.exports = routes;