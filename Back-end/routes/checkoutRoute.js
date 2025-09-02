const express = require('express');
const { confirmarCompra } = require('../controllers/checkoutController.js');

const router = express.Router();

// POST → Enviar datos del carrito y correo
router.post('/confirmar', confirmarCompra);

module.exports = router;
