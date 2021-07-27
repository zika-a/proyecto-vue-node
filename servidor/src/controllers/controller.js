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

module.exports = {
    listarById,
};