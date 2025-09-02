import React, { useState, useEffect } from "react";
import "../styles/Verificar.css";
import { useCart } from "../hooks/useCart";

function Checkout() {
  const { cart, clearCart, getTotalItems, getTotalPrice } = useCart();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
  });

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario) {
      setFormData((prev) => ({
        ...prev,
        nombre: usuario.nombre || "",
        correo: usuario.correo || "",
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, correo } = formData;

    if (!nombre.trim() || !correo.trim()) {
      alert("Por favor, completa al menos tu nombre y correo.");
      setFormValid(false);
      return;
    }

    localStorage.setItem("usuario", JSON.stringify(formData));
    setFormValid(true);
    alert("Información confirmada ✅");
  };

  const handlePagar = async () => {
    if (!formValid) {
      alert("Primero confirma tu información antes de pagar.");
      return;
    }

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    try {
      const res = await fetch("http://localhost:3000/api/compra", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: usuario.nombre,
          correo: usuario.correo,
          libro: "Compra de libros",
          total: Math.round(getTotalPrice() * 1.16),
        }),
      });

      const data = await res.json();
      alert(data.message);

      clearCart(); // Vacía el carrito tras comprar
    } catch (error) {
      console.error("Error en el pago:", error);
      alert("Hubo un problema al procesar el pago.");
    }
  };

  return (
    <div className="checkout-container">
      <div className="contenedor-checkout-formulario">
        <form onSubmit={handleSubmit} className="checkout">
          <h2>Verificar</h2>

          <div className="email-items-checkout">
            <label htmlFor="correo" className="email-label-checkout">
              <h3>Correo electrónico:</h3>
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="email-input-checkout"
              placeholder="Email"
              required
            />
          </div>

          <div className="billing-address-checkout">
            <label className="bill-label-checkout">
              <h2>Billing address</h2>
            </label>
            <div className="full-name">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="nombre-input nombre-checkout"
                placeholder="Nombre(s)"
                required
              />
              <input
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                className="apellidos-input"
                placeholder="Apellido(s)"
              />
            </div>
          </div>

          <div className="btn-submit-checkout">
            <button className="submit-checkout" type="submit">
              Confirmar información
            </button>
          </div>
        </form>
      </div>

      <div className="resumen-compra-2">
        <h3>Resumen de Compra</h3>
        <div className="resumen-detalle">
          <div className="resumen-linea">
            <span>Total de libros:</span>
            <span>{getTotalItems()} items</span>
          </div>
          <div className="resumen-linea">
            <span>Subtotal:</span>
            <span>${getTotalPrice()}.00</span>
          </div>
          <div className="resumen-linea">
            <span>Impuestos (16%):</span>
            <span>${Math.round(getTotalPrice() * 0.16)}.00</span>
          </div>
          <div className="resumen-linea total">
            <span>Total:</span>
            <span>${Math.round(getTotalPrice() * 1.16)}.00</span>
          </div>
        </div>
        <div className="botones-compra">
          <button className="btn-proceder-pago" onClick={handlePagar}>
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
