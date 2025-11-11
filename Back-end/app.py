import os
from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS
from flask_mail import Mail, Message
from dotenv import load_dotenv

# Rutas absolutas seguras
basedir = os.path.abspath(os.path.dirname(__file__))
dist_path = os.path.abspath(os.path.join(basedir, "../dist"))

load_dotenv(dotenv_path=os.path.join(basedir, ".env"))

app = Flask(__name__, static_folder=dist_path, template_folder=dist_path)
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:5173", "http://192.168.1.206:5173"]}}) 

app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS', 'True') == 'True'
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')

mail = Mail(app)

@app.route('/api/contacto', methods=['POST'])
def contacto():
    data = request.get_json()
    nombre = data.get('nombre')
    email = data.get('email')
    mensaje = data.get('mensaje')

    if not all([nombre, email, mensaje]):
        return jsonify({'message': 'Faltan datos en el formulario'}), 400

    contenido = f"""
    Has recibido un nuevo mensaje desde tu formulario de contacto:

    Nombre: {nombre}
    Correo: {email}
    Mensaje: {mensaje}
    """

    msg = Message(
        subject="Nuevo mensaje de contacto",
        sender=app.config['MAIL_USERNAME'],
        recipients=[os.getenv('MAIL_DESTINO')],
        body=contenido
    )

    try:
        mail.send(msg)
        return jsonify({'message': 'Correo enviado correctamente'}), 200
    except Exception as e:
        print(e)
        return jsonify({'message': 'Error al enviar el correo'}), 500

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(debug=True)
