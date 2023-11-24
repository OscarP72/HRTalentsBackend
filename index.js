//Importar las dependencias y configurar el dotenv
const express = require("express");
const cors= require("cors");
const dotenv = require("dotenv");
dotenv.config();
//Importar la conexión a la db.
const connect = require("./src/utils/db");
//Importar cloudinary
const { configCloudinary } = require("./src/middlewares/files.middleware");

//Server
const server = express();
//Connect
connect();
configCloudinary();
server.use (cors());

//Parser
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Routes
const EmployeeRouter = require("./src/api/routes/employee.routes");
server.use("/employeess", EmployeeRouter);

const LaborInformationRouter = require("./src/api/routes/laborinformation.routes");
server.use("/laborinformations", LaborInformationRouter);

const UserRouter = require("./src/api/routes/user.routes");
server.use("/users", UserRouter);

//Ruta para derivar cuando no hay una válida
server.use("*", (req, res) => {
  res.end("Route not found");
});

//Listen
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
