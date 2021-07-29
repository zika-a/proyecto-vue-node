const express = require("express");
const cors = require('cors');
const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
let corsOptions = {
  allRoutes: true,
  origin: '*',
  credentials: true,
  methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
  headers: 'content-type',
}
app.use(cors(corsOptions));

app.use(require('./routes/routes.js'));

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
