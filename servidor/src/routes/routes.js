const express = require('express');

const routes = express.Router();

const {listarById,listar,crear,listarfav, crearfav} = require('../controllers/controller');

//Creación de las rutas
routes.get("/boardgame/:id", listarById);
routes.get("/boardgame",listar);
routes.post("/boardgame", crear);
routes.get("/favorites",listarfav);
routes.post("/favorites",crearfav);
module.exports = routes;