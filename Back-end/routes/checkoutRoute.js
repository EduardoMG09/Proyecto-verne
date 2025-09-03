const express = require('express');
const { checkoutHandler } = require('../controllers/checkoutController.js');

const router = express.Router();

// POST → Enviar datos del carrito y correo
router.post('/', checkoutHandler);

module.exports = router;
