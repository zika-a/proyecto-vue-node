const connection = require('../config/connection');

function listarById (req, res) {
    if(connection){
        const {id}= req.params;
        let sql = "select b.id, b.name, b.publisher, b.category, b.description, b.year, CASE WHEN  f.idBoardgame IS NULL THEN FALSE ELSE TRUE END as favorites from boardgames b left join favorites f on f.idBoardgame = b.id where b.id = ?";
        connection.query(sql, [id], (err, data) => {
            if(err){
                res.status(400).json(err);
            }else{
                res.json({error: false, result: data});
            }
        });
    }


}

function actualizar (req, res){
    if(connection){
        const {id} = req.params;
        const boardgame = req.body;
        if(boardgame.name){
            return res.status(400).send({error:true, mensaje:"El nombre no se puede modificar"})
        }
        if(boardgame.id){
            return res.status(400).send({error: true, mensaje: "El id no se puede modificar"});
        }
        if(boardgame.publisher && boardgame.publisher.length > 60 ){
            return res.status(400).send({error:true, mensaje:"El editor no debe tener mas de 60 caracteres"})
        }
        if(boardgame.category && boardgame.category.length != 2){
            return res.status(400).send({error:true, mensaje:"La categoria debe tener dos caracteres"})
        }
        if(boardgame.description && boardgame.description.length > 200){
            return res.status(400).send({error:true, mensaje:"La descripcion no debe tener mas de 200 caracteres"})
        }
        if(boardgame.year && boardgame.year!=4){
            return res.status(400).send({error:true, mensaje:"El año debe tener 4 caracteres"})
        }
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
                if(data.affectedRows === 0) mensaje="Juego no encontrado";
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
        let sql = "select b.id, b.name, b.publisher, b.category, b.description, b.year, CASE WHEN  f.idBoardgame IS NULL THEN FALSE ELSE TRUE END as favorites from boardgames b left join favorites f on f.idBoardgame = b.id";
        connection.query(sql, (err, data) => {
            if(err){
                res.status(400).json(err);
            }else{
                res.json({error: false, result: data});
            }
        });
    }	
}

function crear(req, res){
    if(connection){
        const boardgame = req.body;
        if(!boardgame.name){
            return res.status(400).send({error:true, mensaje:"El nombre es obligatorio"})
        }
        if(!boardgame.publisher){
            return res.status(400).send({error:true, mensaje:"El editor es obligatorio"})
        }
        if(!boardgame.category){
            return res.status(400).send({error:true, mensaje:"La categoria es obligatoria"})
        }

        if(boardgame.Name && boardgame.name.length > 80){
            return res.status(400).send({error:true, mensaje:"El nombre no debe tener mas de 80 caracteres"})
        }
        if(boardgame.publisher && boardgame.publisher.length > 60){
            return res.status(400).send({error:true, mensaje:"El editor no debe tener mas de 60 caracteres"})
        }
        if(boardgame.category && boardgame.category.length != 2){
            return res.status(400).send({error:true, mensaje:"La debe tener dos caracteres"})
        }
        if(boardgame.description && boardgame.description.length > 200){
            return res.status(400).send({error:true, mensaje:"La descripcion no debe tener mas de 200 caracteres"})
        }
        if(boardgame.year && boardgame.year.length > 4){
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
        let sql = "select b.name, b.publisher, b.year, f.idBoardgame from boardgames b inner join favorites f on f.idBoardgame = b.id";
        connection.query(sql, (err, data) => {
            if(err){
                res.status(400).json(err);
            }else{
                res.json({error: false, result: data});
            }
        });
    }
}

function crearfav(req,res){
    if(connection){
        const favorites = req.body;

        let sql ="insert into favorites set ?";

        if(!favorites.idBoardgame){
            return res.status(400).send({error:true, mensaje:"No se envio idBoardgame"})
        }
        
        connection.query(sql,[id], (err, data) => {
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