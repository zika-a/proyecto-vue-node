const connection = require('../config/connection');

function listarById (req, res) {
    if(connection){
        const {id}= req.params;
        let sql = "select b.id, b.name, b.publisher, b.category, b.description, b.year, f.idBoardgame from boardgames b left join favorites f on f.idBoardgame = b.id where b.id = ?";
        connection.query(sql, [id], (err, data) => {
            if(err){
                res.status(400).json(err);
            }else{
                let favorite = false;
                if(data[0].idBoardgame != null){
                    favorite = true;
                }
                res.json({error: false, result: data, favorite});
            }
        });
    }


}

function actualizar (req, res){
    if(connection){
        const {id} = req.params;
        const boardgame = req.body;
        let sql = "update boardgames set ? where id = ?";
       connection.query(sql, [boardgame, id], (err, data)=>{
           if(err){
               res.status(400).json(err);
           }else{
               let mensaje ="";
               if(data.changedRows === 0) mensaje ="La información es la misma";
               else mensaje="Juego actualizado con exito";
               res.json({error: false, result: data, mensaje});
           }
       });
    }
}

function eliminarBoardgame(req, res){
    if(connection){
        const {id} = req.params;
        let sql = "delete from boardgames where id = ?"
        connection.query(sql, [id], (err, data) => {
            if(err){
                res.status(400).json(err);
            }else{
                let mensaje = "";
                if(data.changedRows === 0) mensaje="Juego no encontrado";
                else mensaje = "Juego elimnado con exito";
                res.json({error: false, result: data, mensaje});
            }
        });
    }
}
function eliminarFavoritos (req, res){
    if(connection){
        const {id} = req.params;
        let sql = "delete from favorites where idBoardgame = ?";
        connection.query(sql, [id], (err, data) => {
            if(err){
                res.status(400).json(err);
            } else{
                let mensaje = data.affectedRows === 0 ? "Juego favorito no encontrado":"Juego favorito eliminado con exito";
                res.json({error: false, result:data, mensaje});
            }
        });
    }
}

function listar (req, res) {
    if(connection){
        let sql = "select b.id, b.name, b.publisher, b.category, b.description, b.year, f.idBoardgame from boardgames b left join favorites f on f.idBoardgame = b.id";
        connection.query(sql, (err, data) => {
            if(err){
                res.status(400).json(err);
            }else{
                let favorite = false;
                if(data.idBoardgame != null){
                    favorite = true;
                }
                res.json({result: data, favorite});
            }
        });
    }	
}

function crear(req, res){
    if(connection){
        const boardgame = req.body;
        if(!boardgame.Name){
            return res.status(400).send({error:true, mensaje:"El nombre es obligatorio"})
        }
        if(!boardgame.publisher){
            return res.status(400).send({error:true, mensaje:"El editor es obligatorio"})
        }
        if(!boardgame.category){
            return res.status(400).send({error:true, mensaje:"La categoria es obligatoria"})
        }
        if(boardgame.Name.length > 80 && Boardgame.Name){
            return res.status(400).send({error:true, mensaje:"El nombre no debe tener mas de 80 caracteres"})
        }
        if(boardgame.Publisher.length > 60 && Boardgame.publisher){
            return res.status(400).send({error:true, mensaje:"El editor no debe tener mas de 60 caracteres"})
        }
        if(boardgame.Category.length != 2 && Boardgame.category){
            return res.status(400).send({error:true, mensaje:"La debe tener dos caracteres"})
        }
        if(boardgame.Description.length > 200){
            return res.status(400).send({error:true, mensaje:"La descripcion no debe tener mas de 200 caracteres"})
        }
        if(boardgame.Year.length > 4){
            return res.status(400).send({error:true, mensaje:"El año debe tener 4 caracteres"})
        }

        let sql ="insert into boardgames set ?";

        connection.query(sql,[boardgame], (err, data) => {
            if(err){
                res.status(400).json(err);
            } else {
                res.json({error:false,resultado: data, mensaje:"Boardgame creado con exito"});
            }
        });
    }
}

function listarfav(req, res){
    if(connection){
        let sql = "select b.name, b.publisher, b.year, f.idBoardgame from boardgames b left join favorites f on f.idBoardgame = b.id";
        connection.query(sql, (err, data) => {
            if(err){
                res.status(400).json(err);
            }else{
                if(data.idBoardgame != null){
                    res.json({result: data, favorite});
                }
                
            }
        });
    }
}

function crearfav(req,res){
    if(connection){
        const favorites = req.body;

        let sql ="insert into favorites set ? where id = ?";

        connection.query(sql,[Boardgame, id], (err, data) => {
            if(err){
                res.status(400).json(err);
            } else {
                res.json({error:false,resultado: data, mensaje:"Boardgame agregado a favoritos"});
            }
        });
    }
    
}

module.exports = {
    listarById,
    actualizar,
    eliminarBoardgame,
    eliminarFavoritos,
    listar,
    crear,
    listarfav,
    crearfav,
};