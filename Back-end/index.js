const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mailRoutes = require("./routes/mailRoutes.js");
const checkout = require("./routes/checkoutRoute.js");

//configuraciion de variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Importar rutas
app.use('/api/mail', mailRoutes);
app.use('/api/checkout', checkout);

// Endpoint raíz
app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente 🚀');
});

app.listen(PORT, () => {
  //console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log("Servidor de Verne corriendo");
});
