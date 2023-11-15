//Importa express
const express = require("express");
//Importamos todos los controladores
const {
  getRols,
  getRolByID,
  getRolByName,
  deleteRol,
  createRol,
  updateRol,
} = require("../controllers/rol.controller");

//Creamos el router
const RolRouter = express.Router();
//Definimos las rutas
RolRouter.get("/", getRols);
RolRouter.get("/byid/:id", getRolByID);
RolRouter.get("/byname/:name", getRolByName);
RolRouter.post("/", createRol);
RolRouter.patch("/:id", updateRol);
RolRouter.delete("/:id", deleteRol);

module.exports = RolRouter;
