const express = require('express');
const { crearfav } = require('../controllers/controller');

const routes = express.Router();

const {listarById, actualizar, eliminarBoardgame, eliminarFavoritos,listar,crear,listarfav,crearfav} = require('../controllers/controller');

//Creación de las rutas
routes.get("/boardgame/:id", listarById);
routes.get("/boardgame",listar);
routes.post("/boardgame", crear);
routes.get("/favorites",listarfav);
routes.post("/favorites",crearfav);
routes.put("/boardgame/:id", actualizar);
routes.delete("/boardgame/:id", eliminarBoardgame);
routes.delete("/favorites/:id", eliminarFavoritos);
module.exports = routes;