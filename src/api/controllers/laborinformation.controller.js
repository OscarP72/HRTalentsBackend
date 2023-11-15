//Importamos el modelo
const LaborInformation = require("../models/laborInformation.model");

const getLaborInformations = async (req, res, next) => {
  try {
    const laborInformations = await LaborInformation.find();
    return res.status(200).json(laborInformations);
  } catch (error) {
    return res.status(404).json("LaborInformations not found", error);
  }
};

const getLaborInformationByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const laborInformation = await LaborInformation.findById(id);
    return res.status(200).json(laborInformation);
  } catch (error) {
    return res.status(404).json("LaborInformation not found", error);
  }
};

const getLaborByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const labor = await Labor.findOne({ name: name });
    return res.status(200).json(labor);
  } catch (error) {
    return res.status(404).json("Labor not found", error);
  }
};

const createLaborInformation = async (req, res, next) => {
  try {
    const newLaborInformation = new LaborInformation(req.body);
    await newLaborInformation.save();
    return res.status(201).json(newLaborInformation);
  } catch (error) {
    return res.status(500).json("Failed creating LaborInformation", error);
  }
};

const deleteLaborInformation = async (req, res, next) => {
  try {
    const { id } = req.params;
    await LaborInformation.findByIdAndDelete(id);
    return res.status(200).json("LaborInformation deleted");
  } catch (error) {
    return res.status(500).json("Failed deleting laborInformation");
  }
};

const updateLaborInformation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newLaborInformation = new LaborInformation(req.body);
    newLaborInformation._id = id;
    await LaborInformation.findByIdAndUpdate(id, newLaborInformation);
    return res.status(200).json("Edited laborInformation");
  } catch (error) {
    return res.status(500).json("Failed editing laborInformation", error);
  }
};

module.exports = {
  getLaborInformations,
  getLaborInformationByID,
  getLaborByName,
  deleteLaborInformation,
  createLaborInformation,
  updateLaborInformation,
};
