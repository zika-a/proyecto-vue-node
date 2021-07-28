const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Levantar el servidor
app.listen(app.get("port"), (error) => {
  if (error) {
    console.log("Ha ocurrido un error");
  } else {
    console.log("Servidor en puerto: ", app.get("port"));
  }
});
//para ver si nos podemos conectar
require("./config/connection");

app.use(require('./routes/routes'));