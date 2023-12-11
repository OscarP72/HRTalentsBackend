const mongoose = require("mongoose");

const curriculumSchema = new mongoose.Schema({
  nombre: String,
  apellidos: String,
  email: String,
  cv: String,
});

const CurriculumModel = mongoose.model("Curriculum", curriculumSchema);

module.exports = CurriculumModel;
