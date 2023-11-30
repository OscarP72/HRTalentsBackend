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
const { isAuth } = require("../../middlewares/auth.middleware");
//Creamos el router
const EmployeeRouter = express.Router();
//Definimos las rutas
EmployeeRouter.get("/", getEmployees);
EmployeeRouter.get("/byid/:id", [isAuth], getEmployeeByID);
EmployeeRouter.get("/byname/:name", [isAuth], getEmployeeByName);
EmployeeRouter.post("/", [isAuth], createEmployee);
EmployeeRouter.patch("/:id", [isAuth], updateEmployee);
EmployeeRouter.delete("/:id", [isAuth], deleteEmployee);

module.exports = EmployeeRouter;
