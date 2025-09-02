const nodemailer = require('nodemailer');

const sendEmail = async (to, cart) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Crear el contenido del carrito
  const itemsList = cart.map(item => `
    <li>${item.name} - ${item.quantity} x $${item.price}</li>
  `).join('');

  await transporter.sendMail({
    from: `"Verne Shop" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Confirmación de compra',
    html: `
      <h2>¡Gracias por tu compra!</h2>
      <p>Estos son los productos adquiridos:</p>
      <ul>${itemsList}</ul>
      <p>Total: <b>$${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</b></p>
    `,
  });
};

module.exports = sendEmail;
