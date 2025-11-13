import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import "../styles/Verificar.css";
import { useCart } from "../hooks/useCart";

function Checkout() {
  const { cart, clearCart, getTotalItems, getTotalPrice } = useCart();
  const [librosCompra, setLibrosCompra] = useState([]);
  const [loadingPay, setLoadingPay] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
  });

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const librosGuardados =
      JSON.parse(localStorage.getItem("librosCompra")) || [];
    if (usuario) {
      setFormData((prev) => ({
        ...prev,
        nombre: usuario.nombre || "",
        correo: usuario.correo || "",
      }));
    }
    setLibrosCompra(librosGuardados);
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
    if (!formValid || loadingPay) {
      if (!formValid) alert("Primero confirma tu información antes de pagar.");
      return;
    }
    setLoadingPay(true);

    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const libros = JSON.parse(localStorage.getItem("librosCompra")) || [];

    // 👇 aquí decides el correo destino (ejemplo fijo o tomado de algún estado)
    const destino = "profe@paolacortezeducacion.com";
    // o const destino = selectedProfesorEmail;

    try {
      const res = await fetch("http://127.0.0.1:5000/api/checkout/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: usuario.nombre,
          correo: usuario.correo,
          libros: libros.map((l) => ({
            titulo: l.titulo,
            cantidad: l.quantity,
            precio: l.precio,
            total: l.precio * l.quantity,
          })),
          total: Math.round(getTotalPrice() * 1.16),
          destino, // 👈 aquí va el email destino dinámico
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Error en el servidor");
      }

      alert(data.message || "Compra procesada");
      localStorage.removeItem("librosCompra");
      clearCart();
    } catch (error) {
      console.error("Error en el pago:", error);
      alert("Hubo un problema al procesar el pago.");
    } finally {
      setLoadingPay(false);
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
          <button
            className="btn-proceder-pago"
            onClick={handlePagar}
            disabled={loadingPay}
            style={{
              opacity: loadingPay ? 0.7 : 1,
              cursor: loadingPay ? "not-allowed" : "pointer",
              position: "relative",
            }}
          >
            {loadingPay ? (
              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FaSpinner
                  className="spin"
                  style={{ animation: "spin 0.9s linear infinite" }}
                />
                Procesando...
              </span>
            ) : (
              "Pagar"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

// Simple CSS-in-JS for spinner fallback if no global style:
// Puedes mover esta animación a tu hoja CSS global.
const style = document.createElement("style");
style.innerHTML = `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`;
document.head.appendChild(style);
