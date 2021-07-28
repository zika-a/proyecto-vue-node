const express = require('express');

const routes = express.Router();

const {listarById, actualizar, eliminarBoardgame} = require('../controllers/controller');

//Creación de las rutas
routes.get("/boardgame/:id", listarById);

routes.put("/boardgame/:id", actualizar)

routes.delete("/boardgame/:id", eliminarBoardgame)

module.exports = routes;