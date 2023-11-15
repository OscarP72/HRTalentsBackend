//Importa express
const express = require("express");
//Importamos todos los controladores
const {
  getEmployees,
  getEmployeeByID,
  getEmployeeByName,
  deleteEmployee,
  createEmployee,
  updateEmployee,
} = require("../controllers/employee.controller");

//Creamos el router
const EmployeeRouter = express.Router();
//Definimos las rutas
EmployeeRouter.get("/", getEmployees);
EmployeeRouter.get("/byid/:id", getEmployeeByID);
EmployeeRouter.get("/byname/:name", getEmployeeByName);
EmployeeRouter.post("/", createEmployee);
EmployeeRouter.patch("/:id", updateEmployee);
EmployeeRouter.delete("/:id", deleteEmployee);

module.exports = EmployeeRouter;
