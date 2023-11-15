const mongoose = require("mongoose");

const LaborInformationSchema = new mongoose.Schema(
  {
    salary: { type: Number, required: true },
    name: {
      type: String,
      required: true,
      trim: true,
      enum: ["admin", "director", "operator"],
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
