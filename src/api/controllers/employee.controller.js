//Importamos el modelo
const Employee = require("../models/employee.model");

const getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    return res.status(200).json(employees);
  } catch (error) {
    return res.status(404).json("Employees not found", error);
  }
};

const getEmployeeByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    return res.status(200).json(employee);
  } catch (error) {
    return res.status(404).json("Employee not found", error);
  }
};

const getEmployeeByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const employee = await Employee.findOne({ name: name });
    return res.status(200).json(employee);
  } catch (error) {
    return res.status(404).json("Employee not found", error);
  }
};

const createEmployee = async (req, res, next) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    return res.status(201).json(newEmployee);
  } catch (error) {
    return res.status(500).json("Failed creating Employee", error);
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    return res.status(200).json("Employee deleted");
  } catch (error) {
    return res.status(500).json("Failed deleting employee");
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newEmployee = new Employee(req.body);
    newEmployee._id = id;
    await Employee.findByIdAndUpdate(id, newEmployee);
    return res.status(200).json("Edited employee");
  } catch (error) {
    return res.status(500).json("Failed editing employee", error);
  }
};

module.exports = {
  getEmployees,
  getEmployeeByID,
  getEmployeeByName,
  deleteEmployee,
  createEmployee,
  updateEmployee,
};
