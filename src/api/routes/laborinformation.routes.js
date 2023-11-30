//Importa express
const express = require("express");
//Importamos todos los controladores
const {
  getLaborInformations,
  getLaborInformationByID,
  getLaborInformationByName,
  deleteLaborInformation,
  createLaborInformation,
  updateLaborInformation,
} = require("../controllers/laborInformation.controller");
const {isAuth}=require ("../../middlewares/auth.middleware");
//Creamos el router
const LaborInformationRouter = express.Router();
//Definimos las rutas
LaborInformationRouter.get("/", [isAuth], getLaborInformations);
LaborInformationRouter.get("/byid/:id", [isAuth], getLaborInformationByID);
LaborInformationRouter.get("/byname/:name", [isAuth], getLaborInformationByName);
LaborInformationRouter.post("/", [isAuth], createLaborInformation);
LaborInformationRouter.patch("/:id", [isAuth], updateLaborInformation);
LaborInformationRouter.delete("/:id", [isAuth], deleteLaborInformation);

module.exports = LaborInformationRouter;
