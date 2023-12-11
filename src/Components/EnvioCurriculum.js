// EnvioCurriculum.js

const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const CurriculumModel = require("../api/models/curriculum.model.js");

router.post("/", async (req, res) => {
  try {
    const { nombre, apellidos, email } = req.body;
    const cvBuffer = req.files.cv.data; // asumiendo que el campo es "cv"

    // Subir el archivo a Cloudinary
    const result = await cloudinary.uploader.upload_stream({
      resource_type: 'auto',
      public_id: `${nombre}_${apellidos}_cv`,
    }, async (error, result) => {
      if (error) {
        console.error('Error al subir el archivo a Cloudinary:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        // Almacenar el currículum en la base de datos
        const newCurriculum = new CurriculumModel({
          nombre,
          apellidos,
          email,
          cv: result.secure_url, // Almacenar la URL en la base de datos
        });

        await newCurriculum.save();

        res.status(200).json({ message: 'Currículum enviado correctamente' });
      }
    }).end(cvBuffer);

  } catch (error) {
    console.error('Error al procesar el formulario de currículum:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
