const { Resend } = require("resend");
const dotenv = require("dotenv");

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    await resend.emails.send({
      from: "Tu Sitio <onboarding@resend.dev>", // puedes cambiarlo luego por tu dominio verificado
      to: process.env.EMAIL_USER, // tu correo personal o de recepción
      subject: `Nuevo mensaje de ${nombre}`,
      html: `
        <h3>Detalles del contacto</h3>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b> ${mensaje}</p>
      `,
    });

    res.status(200).json({ message: "Correo enviado con éxito 🚀" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    res.status(500).json({ error: "Error al enviar correo" });
  }
};

module.exports = { sendMail };
