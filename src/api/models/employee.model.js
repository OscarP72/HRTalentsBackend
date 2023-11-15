const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    nif: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    birthdate: { type: Date, required: true },
    datehight: { type: Date, required: true },
    enddate: { type: Date },
    maritalstatus: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "soltero",
        "soltera",
        "Casado",
        "casada",
        "divorciado",
        "divorciada",
        "otros",
      ],
    },
    guys: { type: Number, enum: [0, 1, 2, 3, 4] },
    girls: { type: Number, enum: [0, 1, 2, 3, 4] },
    cif: { type: String, required: true, trim: true },
    name: { type: String, trim: true },
    laborInformations: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "laborInformation",
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("employee", EmployeeSchema);

module.exports = Employee;
