# Backend Flask (Migrado desde Express)

Este directorio reemplaza el backend original en Node.js por una implementación en **Flask**.

## Endpoints

| Método | Ruta              | Descripción                          |
|--------|-------------------|--------------------------------------|
| POST   | /api/mail/        | Envía correo de contacto vía Resend  |
| POST   | /api/checkout/    | Procesa compra y envía resumen       |
| GET    | /                 | Health check                         |

## Variables de entorno (.env)

```
PORT=5000
EMAIL_USER=tu_correo@example.com
EMAIL_PASS=tu_app_password
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
```

## Instalación

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

## Notas de seguridad
- Usa App Password de Gmail, no la contraseña principal.
- No subas el archivo `.env` real (ya está ignorado).
- Rota `RESEND_API_KEY` si se expone.

## Migración
Los archivos originales de Node se eliminaron. Si necesitas volver atrás, recupera la versión anterior desde el historial Git.
