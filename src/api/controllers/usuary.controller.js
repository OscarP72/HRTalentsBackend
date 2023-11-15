//Importamos el modelo
const Usuary = require("../models/usuary.model");

const getUsuarys = async (req, res, next) => {
  try {
    const usuarys = await Usuary.find();
    return res.status(200).json(usuarys);
  } catch (error) {
    return res.status(404).json("Usuarys not found", error);
  }
};

const getUsuaryByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const usuary = await Usuary.findById(id);
    return res.status(200).json(usuary);
  } catch (error) {
    return res.status(404).json("Usuary not found", error);
  }
};

const getUsuaryByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const usuary = await Usuary.findOne({ name: name });
    return res.status(200).json(usuary);
  } catch (error) {
    return res.status(404).json("Usuary not found", error);
  }
};

const createUsuary = async (req, res, next) => {
  try {
    const newUsuary = new Usuary(req.body);
    await newUsuary.save();
    return res.status(201).json(newUsuary);
  } catch (error) {
    return res.status(500).json("Failed creating Usuary", error);
  }
};

const deleteUsuary = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Usuary.findByIdAndDelete(id);
    return res.status(200).json("Usuary deleted");
  } catch (error) {
    return res.status(500).json("Failed deleting usuary");
  }
};

const updateUsuary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newUsuary = new Usuary(req.body);
    newUsuary._id = id;
    await Usuary.findByIdAndUpdate(id, newUsuary);
    return res.status(200).json("Edited usuary");
  } catch (error) {
    return res.status(500).json("Failed editing usuary", error);
  }
};

module.exports = {
  getUsuarys,
  getUsuaryByID,
  getUsuaryByName,
  deleteUsuary,
  createUsuary,
  updateUsuary,
};
