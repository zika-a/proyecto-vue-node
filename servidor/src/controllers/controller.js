const connection = require('../config/connection');

function listarById (req, res) {
    if(connection){
        const {id}= req.params;
        let sql = "select * from boardgames where id = ?";
        connection.query(sql, [id], (err, data) => {
            if(err){
                res.status(400).json(err);
            }else{
                res.json({error: false, result: data, favorite: false});
            }
        });
    }
}

module.exports = {
    listarById,
};