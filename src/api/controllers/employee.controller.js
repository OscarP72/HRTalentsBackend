const express = require('express');
const multer = require('multer');
const router = express.Router();
const Employee = require("../models/employee.model");
const LaborInformation = require('../models/laborInformation.model');
const {deleteImgCloudinary} = require("../../middlewares/files.middleware");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Carpeta de destino para almacenar las imágenes
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nombre de archivo único
  },
});
const getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find().populate("laborInformation");
    return res.status(200).json(employees);
  } catch (error) {
    return res.status(404).json("Employees not found", error);
  }
};

const getEmployeeByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id).populate("laborInformation");
    return res.status(200).json(employee);
  } catch (error) {
    return res.status(404).json("Employee not found", error);
  }
};

const getEmployeeByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const employee = await Employee.findOne({ name: name }).populate("laborInformation");
    return res.status(200).json(employee);
  } catch (error) {
    return res.status(404).json("Employee not found", error);
  }
};

const createEmployee = async (req, res, next) => {
  try {
    const employeeData = req.body;

    
    const laborInfo = new LaborInformation({
      salary: employeeData.laborinformation.salary,
      job: employeeData.laborinformation.job,
      position: employeeData.laborinformation.position,
    });

    
    const savedLaborInfo = await laborInfo.save();

    
    const newEmployee = new Employee({
      emplid: employeeData.emplid,
      name: employeeData.name,
      lastname: employeeData.lastname,
      nif: employeeData.nif,
      phone: employeeData.phone,
      birthdate: employeeData.birthdate,
      dischargeDate: employeeData.dischargeDate,
      enddate: employeeData.enddate,
      maritalstatus: employeeData.maritalstatus,
      children: employeeData.children,
      cif: employeeData.cif,
      company: employeeData.company,
      ssnumber: employeeData.ssnumber,
      addresses: employeeData.addresses,
      department: employeeData.department,
      laborInformation: [savedLaborInfo._id], 
      image: employeeData.image,  
    });

    
    await newEmployee.save();

    res.status(201).json({ success: true, message: 'Empleado creado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const actualEmployee= await Employee.findById(id);
    deleteImgCloudinary(actualEmployee.avatar);
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
    await Employee.findByIdAndUpdate(id, {
      ...req-body,
      avatar:req.file 
      ? req.file.path
      : "https://murphys-movies.vercel.app/movie-poster-placeholder.svg",
    },
    {new:true});
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
