import os
import requests
from flask import Blueprint, request, jsonify

mail_bp = Blueprint("mail", __name__)


@mail_bp.route("/", methods=["POST"])
def send_mail():
    """Envía un correo usando la API de Resend con los datos de contacto."""
    payload = request.get_json(silent=True) or {}
    nombre = payload.get("nombre")
    email = payload.get("email")
    mensaje = payload.get("mensaje")

    if not nombre or not email or not mensaje:
        return jsonify({"error": "Todos los campos son obligatorios"}), 400

    api_key = os.getenv("RESEND_API_KEY")
    to_address = os.getenv("EMAIL_USER")
    if not api_key or not to_address:
        return jsonify({"error": "Configuración de correo incompleta"}), 500

    body = {
        "from": "Tu Sitio <onboarding@resend.dev>",
        "to": [to_address],
        "subject": f"Nuevo mensaje de {nombre}",
        "html": f"<h3>Detalles del contacto</h3><p><b>Nombre:</b> {nombre}</p><p><b>Email:</b> {email}</p><p><b>Mensaje:</b> {mensaje}</p>",
    }

    try:
        resp = requests.post(
            "https://api.resend.com/emails",
            headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
            json=body,
            timeout=15,
        )
        if resp.status_code >= 400:
            return jsonify({"error": "Error al enviar correo", "details": resp.text}), 502
        return jsonify({"message": "Correo enviado con éxito 🚀"}), 200
    except requests.RequestException as e:
        return jsonify({"error": "Fallo de red al enviar correo", "details": str(e)}), 500