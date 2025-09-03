const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    // Configuración del transporte SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail", // o "hotmail", "yahoo", etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Contenido del correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Lo mandas a tu propio correo
      subject: `Nuevo mensaje de ${nombre}`,
      html: `
        <h3>Detalles del contacto</h3>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b> ${mensaje}</p>
      `,
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    res.status(500).json({ error: "Error al enviar correo" });
  }
};

module.exports = { sendMail };
