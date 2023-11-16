const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    emplid: { type: Number, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    nif: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    birthdate: { type: String, required: true },
    dischargeDate: { type: String, required: true },
    enddate: { type: String, required: false },
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
    children: { type: Number, enum: [0, 1, 2, 3, 4] },
    cif: { type: String, required: true, trim: true },
    company: { type: String, trim: true },
    ssnumber: { type: String, required: true, trim: true },
    addresses: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    laborInformation: [
      {
        type: mongoose.Types.ObjectId,
        ref: "laborInformation",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("employee", EmployeeSchema);

module.exports = Employee;
