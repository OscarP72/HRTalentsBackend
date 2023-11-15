const mongoose = require("mongoose");

const UsuarySchema = new mongoose.Schema(
  {
    name: {type: String, required: true, trim:true},
    pasword: {type: pasword, required:true},
    rol: {type: mongoose.Schema.Types.ObjectId, ref: "rol"},
  },
  {
    timestamps: true,
  }
);

const Usuary = mongoose.model("usuary", UsuarySchema);

module.exports = Usuary;
