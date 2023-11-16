const mongoose = require("mongoose");

const LaborInformationSchema = new mongoose.Schema(
  {
    salary: { type: Number, required: true },
    job: {
      type: String,
      required: true,
      trim: true,
      enum: ["admin", "director", "operator", "gerente general"],
    },
    position: {
      type: String,
      required: true,
      trim: true,
      enum: ["senior", "junior", "becario"],
    },
  },
  {
    timestamps: true,
  }
);

const LaborInformation = mongoose.model(
  "laborInformation",
  LaborInformationSchema
);

module.exports = LaborInformation;
