// backend/controllers/checkout.controller.js
const nodemailer = require('nodemailer');
require('dotenv').config();

const confirmarCompra = async (req, res) => {
  const { email, nombre, productos, total } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const itemsList = productos.map(p => `<li>${p.nombre} x ${p.cantidad}</li>`).join('');

    await transporter.sendMail({
      from: `"Verne Store" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Confirmación de compra',
      html: `
        <h2>¡Hola ${nombre}!</h2>
        <p>Gracias por tu compra. Estos son tus productos:</p>
        <ul>${itemsList}</ul>
        <p>Total: $${total}</p>
      `,
    });

    res.status(200).json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al enviar el correo' });
  }
};

module.exports = { confirmarCompra };
