//Importa express
const express = require("express");
//Importamos todos los controladores
const {
  getUsuarys,
  getUsuaryByID,
  getUsuaryByName,
  deleteUsuary,
  createUsuary,
  updateUsuary,
} = require("../controllers/usuary.controller");

//Creamos el router
const UsuaryRouter = express.Router();
//Definimos las rutas
UsuaryRouter.get("/", getUsuarys);
UsuaryRouter.get("/byid/:id", getUsuaryByID);
UsuaryRouter.get("/byname/:name", getUsuaryByName);
UsuaryRouter.post("/", createUsuary);
UsuaryRouter.patch("/:id", updateUsuary);
UsuaryRouter.delete("/:id", deleteUsuary);

module.exports = UsuaryRouter;
