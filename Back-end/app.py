import os
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173", "https://tusitio.hostinger.com","http://192.168.1.206:5173"])

# Import blueprints after app to avoid circular imports
from controllers.mail_controller import mail_bp  # noqa: E402
from controllers.checkout_controller import checkout_bp  # noqa: E402

app.register_blueprint(mail_bp, url_prefix="/api/mail")
app.register_blueprint(checkout_bp, url_prefix="/api/checkout")

@app.route("/")
def root():
    return jsonify({"message": "Backend Flask funcionando correctamente 🚀"})

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)