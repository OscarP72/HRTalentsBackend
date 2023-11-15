//Importar las dependencias y configurar el dotenv
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
//Importar la conexión a la db.
const connect = require("./src/utils/db");

//Server
const server = express();
//Connect
connect();
//Parser
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Routes
const EmployeeRouter = require("./src/api/routes/employee.routes");
server.use("/employeess", EmployeeRouter);

const LaborInformationRouter = require("./src/api/routes/laborinformation.routes");
server.use("/laborinformations", LaborInformationRouter);

//Ruta para derivar cuando no hay una válida
server.use("*", (req, res) => {
  res.end("Route not found");
});

//Listen
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
