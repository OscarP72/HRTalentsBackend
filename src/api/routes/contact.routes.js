// contact.routes.js
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const router = express.Router();

router.post('/send-email', async (req, res) => {
  const { nombre, apellido, email, motivo } = req.body;

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
    subject: 'Nuevo mensaje de contacto',
    text: `
      Nombre: ${nombre}
      Apellido: ${apellido}
      Email: ${email}
      Motivo de contacto: ${motivo}
    `,
  };

  try {
    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado con éxito');
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).json({ success: false, error: 'Error al enviar el correo electrónico' });
  }
});

module.exports = router;
