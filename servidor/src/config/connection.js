const mysql = require('mysql');

const objectConection = {
  "host": "localhost",
  "port": 3306,
  "user": "root",
  "password": "1234qwer",
  "database": "juegos_mesa",
};

const myCon = mysql.createConnection(objectConection);

myCon.connect((error) => {
  if (error) {
    console.log("Ha ocurrido un error", error);
  } else {
    console.log("Base de datos conectada");
  }
});

module.exports = myCon;
    