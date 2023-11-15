const mongoose = require("mongoose");

const RolSchema = new mongoose.Schema(
  {
    name: { type: string, required: true, trim: true, enum: ["admin", "user"] },
  },
  {
    timestamps: true,
  }
);

const Rol = mongoose.model("rol", RolSchema);

module.exports = Rol;
