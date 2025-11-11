import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from pathlib import Path
from flask import Blueprint, request, jsonify

checkout_bp = Blueprint("checkout", __name__)


def _build_libros_rows(libros):
    rows = []
    for l in libros:
        titulo = l.get("titulo", "-")
        cantidad = l.get("cantidad", 0)
        precio = l.get("precio", 0)
        total = l.get("total", cantidad * precio)
        rows.append(
            f"<tr style='border-bottom:1px solid #eee;'>"
            f"<td style='padding:10px; color:#333;'>{titulo}</td>"
            f"<td style='padding:10px; color:#333; text-align:center;'>{cantidad}</td>"
            f"<td style='padding:10px; color:#333; text-align:center;'>${precio}</td>"
            f"<td style='padding:10px; color:#333; text-align:center;'>${total}</td>"
            f"</tr>"
        )
    return "".join(rows)


@checkout_bp.route("/", methods=["POST"])
def checkout_handler():
    data = request.get_json(silent=True) or {}
    nombre = data.get("nombre")
    correo = data.get("correo")
    libros = data.get("libros") or []
    total = data.get("total")

    if not nombre or not correo or not libros or total is None:
        return jsonify({"error": "Faltan datos para procesar la compra"}), 400

    email_user = os.getenv("EMAIL_USER")
    email_pass = os.getenv("EMAIL_PASS")
    if not email_user or not email_pass:
        return jsonify({"error": "Servidor sin credenciales de correo"}), 500

    # Cargar plantilla
    template_path = Path(__file__).parent.parent / "templates" / "orderResume.html"
    if not template_path.exists():
        return jsonify({"error": "Plantilla de correo no encontrada"}), 500
    template_html = template_path.read_text(encoding="utf-8")

    lista_libros_html = _build_libros_rows(libros)
    html_content = (
        template_html
        .replace("{{nombre}}", nombre)
        .replace("{{listaLibros}}", lista_libros_html)
        .replace("{{total}}", str(total))
    )

    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Confirmación de tu compra en Verne Learning"
    msg["From"] = email_user
    msg["To"] = correo
    # Adjuntar la parte HTML
    msg.attach(MIMEText(html_content, "html", "utf-8"))

    # Nota: se eliminó el logo inline para maximizar compatibilidad y evitar bloqueos de imágenes.

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(email_user, email_pass)
            server.sendmail(email_user, [correo], msg.as_string())
        return jsonify({"message": "Compra procesada y correo enviado ✅"})
    except smtplib.SMTPException as e:
        return jsonify({"error": "Error al enviar el correo", "details": str(e)}), 500