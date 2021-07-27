const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3000);

//Levantar el servidor
app.listen(app.get("port"), (error) => {
  if (error) {
    console.log("Ha ocurrido un error");
  } else {
    console.log("Servidor en puerto: ", app.get("port"));
  }
});

//Creación de rutas
