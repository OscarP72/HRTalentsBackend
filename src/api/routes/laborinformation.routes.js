//Importa express
const express = require("express");
//Importamos todos los controladores
const {
  getLaborInformations,
  getLaborInformationByID,
  getLaborByName,
  deleteLaborInformation,
  createLaborInformation,
  updateLaborInformation,
} = require("../controllers/laborInformation.controller");

//Creamos el router
const LaborInformationRouter = express.Router();
//Definimos las rutas
LaborInformationRouter.get("/", getLaborInformations);
LaborInformationRouter.get("/byid/:id", getLaborInformationByID);
LaborInformationRouter.get("/byname/:name", getLaborByName);
LaborInformationRouter.post("/", createLaborInformation);
LaborInformationRouter.patch("/:id", updateLaborInformation);
LaborInformationRouter.delete("/:id", deleteLaborInformation);

module.exports = LaborInformationRouter;
