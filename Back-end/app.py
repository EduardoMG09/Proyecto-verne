import os
from flask import Flask, send_from_directory, jsonify, request, render_template
from flask_cors import CORS
from dotenv import load_dotenv
import resend

# Rutas absolutas seguras
basedir = os.path.abspath(os.path.dirname(__file__))
dist_path = os.path.abspath(os.path.join(basedir, "../dist"))
templates_path = os.path.join(basedir, "templates")

# Cargar variables de entorno locales (solo para desarrollo local)
load_dotenv(dotenv_path=os.path.join(basedir, ".env"))

# Configurar Resend
RESEND_API_KEY = os.getenv("RESEND_API_KEY")
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

# Usamos dist para archivos estáticos del front y la carpeta /templates para Jinja
app = Flask(__name__, static_folder=dist_path, template_folder=templates_path)

# Orígenes permitidos (dev + producción)
CORS(
    app,
    resources={
        r"/api/*": {
            "origins": [
                "http://localhost:5173",
                "http://192.168.1.206:5173",
                "https://verne.paolacortezeducacion.com",
            ]
        }
    },
)

# Correo de destino (a dónde llegan los mensajes del formulario)
MAIL_DESTINO = os.getenv("MAIL_DESTINO", "tu-correo@paolacortezeducacion.com")

@app.route("/api/checkout/", methods=["POST"])
def checkout():
    data = request.get_json() or {}

    nombre = data.get("nombre")
    correo = data.get("correo")
    libros = data.get("libros", [])
    total = data.get("total")
    destino = data.get("destino")  # si sigues usando destino (profe), si no, lo puedes quitar

    if not all([nombre, correo, libros, total]):
        return jsonify({"error": "Faltan datos en el cuerpo de la petición"}), 400

    # Si solo quieres enviar al comprador:
    to_email = correo

    # Renderizar el HTML con la plantilla
    html = render_template(
        "orderResume.html",
        nombre=nombre,
        correo=correo,
        libros=libros,
        total=total,
    )

    params = {
        "from": "Verne <no-reply@paolacortezeducacion.com>",
        "to": [to_email],
        "subject": "Resumen de tu compra en Verne",
        "html": html,
    }

    try:
        email_resp = resend.Emails.send(params)
        return jsonify(
            {
                "message": "Compra registrada y correo enviado",
                "email_id": email_resp.get("id"),
            }
        ), 200
    except Exception as e:
        print("Error al enviar correo con Resend:", e)
        return jsonify({"error": "Error al enviar el correo"}), 500

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


@app.route("/<path:path>")
def static_files(path):
    return send_from_directory(app.static_folder, path)


if __name__ == "__main__":
    app.run(debug=True)
