const express = require('express');

const routes = express.Router();

const {listarById, actualizar, eliminarBoardgame, eliminarFavoritos,listar,crear,listarfav,crearfav} = require('../controllers/controller');

//Creación de las rutas
routes.get("/boardgame",listar); //falta
routes.get("/boardgame/:id", listarById); //esta bien
routes.post("/boardgame", crear); //esta bien
routes.put("/boardgame/:id", actualizar); //esta bien
routes.delete("/boardgame/:id", eliminarBoardgame);

routes.get("/favorites",listarfav);
routes.post("/favorites",crearfav);
routes.delete("/favorites/:id", eliminarFavoritos);
module.exports = routes;