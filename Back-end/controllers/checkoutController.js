const fs = require("fs");
const nodemailer = require("nodemailer");

const checkoutHandler = async (req, res) => {
  const { nombre, correo, libros, total } = req.body;

  if (!nombre || !correo || !libros || libros.length === 0 || !total) {
    return res.status(400).json({ error: "Faltan datos para procesar la compra" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Generar tabla HTML con los libros
    const listaLibros = libros
      .map(
        (l) => `
        <tr style="border-bottom:1px solid #eee;">
            <td style="padding:10px; color:#333;">${l.titulo}</td>
            <td style="padding:10px; color:#333; text-align:center;">${l.cantidad}</td>
            <td style="padding:10px; color:#333; text-align:center;">$${l.precio}</td>
            <td style="padding:10px; color:#333; text-align:center;">$${l.total}</td>
        </tr>
        `
      )
      .join("");

    const path = require("path");

    // Cargar plantilla HTML
    const emailTemplatePath = path.join(__dirname, "..", "templates", "orderResume.html");
    const emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");

    // Reemplazar variables en la plantilla
    const htmlContent = emailTemplate
      .replace(/{{nombre}}/g, nombre)
      .replace("{{listaLibros}}", listaLibros)
      .replace("{{total}}", total);

    //configurar el correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: correo,
      subject: "Confirmación de tu compra en Verne Learning",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    

    res.json({ message: "Compra procesada y correo enviado ✅" });
  } catch (error) {
    console.error("Error al procesar pago:", error);
    res.status(500).json({ error: "Error al enviar el correo" });
  }
};

module.exports = { checkoutHandler };
