const express = require('express');

const routes = express.Router();

routes.get('/hola',(req,res)=>{
res.json({mensaje:"hola"})
})

const {listarById, actualizar, eliminarBoardgame, eliminarFavoritos,listar,crear,listarfav,crearfav} = require('../controllers/controller');

//Creación de las rutas
routes.get("/boardgame",listar);
routes.get("/boardgame/:id", listarById);
routes.post("/boardgame", crear);
routes.put("/boardgame/:id", actualizar);
routes.delete("/boardgame/:id", eliminarBoardgame);
routes.get("/favorites",listarfav);
routes.post("/favorites",crearfav);
routes.delete("/favorites/:id", eliminarFavoritos);
module.exports = routes;