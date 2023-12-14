const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const router = express.Router();

router.post('/send-email2', async (req, res) => {
  const {
    nombre,
    apellido,
    organizacion,
    email,
    telefono,
    contraseña,
    comentarios,
  } = req.body;

  // Configuración de nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CORREO,
      pass: process.env.CONTRASENA,
    },
  });

  // Configuración del mensaje de correo electrónico
  const mailOptions = {
    from: process.env.CORREO,
    to: 'dwhrsoft@gmail.com',
    subject: 'Nuevo mensaje de contacto desde el formulario de registro',
    text: `
      Nombre: ${nombre}
      Apellido: ${apellido}
      Organización: ${organizacion}
      Email: ${email}
      Teléfono: ${telefono}
      Contraseña: ${contraseña}
      Comentarios: ${comentarios}
    `,
  };

  try {
    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado con éxito');
    res.status(200).json({ success: true, message: 'Correo electrónico enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).json({ success: false, error: 'Error al enviar el correo electrónico' });
  }
});

module.exports = router;
