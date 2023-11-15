//Importamos el modelo
const Rol = require("../models/rol.model");

const getRols = async (req, res, next) => {
  try {
    const rols = await Rol.find();
    return res.status(200).json(rols);
  } catch (error) {
    return res.status(404).json("Rols not found", error);
  }
};

const getRolByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rol = await Rol.findById(id);
    return res.status(200).json(rol);
  } catch (error) {
    return res.status(404).json("Rol not found", error);
  }
};

const getRolByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const rol = await Rol.findOne({ name: name });
    return res.status(200).json(rol);
  } catch (error) {
    return res.status(404).json("Rol not found", error);
  }
};

const createRol = async (req, res, next) => {
  try {
    const newRol = new Rol(req.body);
    await newRol.save();
    return res.status(201).json(newRol);
  } catch (error) {
    return res.status(500).json("Failed creating Rol", error);
  }
};

const deleteRol = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Rol.findByIdAndDelete(id);
    return res.status(200).json("Rol deleted");
  } catch (error) {
    return res.status(500).json("Failed deleting rol");
  }
};

const updateRol = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newRol = new Rol(req.body);
    newRol._id = id;
    await Rol.findByIdAndUpdate(id, newRol);
    return res.status(200).json("Edited rol");
  } catch (error) {
    return res.status(500).json("Failed editing rol", error);
  }
};

module.exports = {
  getRols,
  getRolByID,
  getRolByName,
  deleteRol,
  createRol,
  updateRol,
};
