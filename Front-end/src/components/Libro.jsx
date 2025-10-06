import React from "react";
import "../styles/Libreria.css";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

function Libro(props) {
  const { addToCart, isInCart, getItemQuantity } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Evita que el Link navegue al hacer click en el botón
    // Validar que todos los datos necesarios estén presentes
    if (!props.id || !props.titulo || !props.precio) {
      console.error("Faltan datos del producto:", props);
      return;
    }

    const producto = {
      id: props.id,
      titulo: props.titulo,
      precio: props.precio,
      rate: props.rate || 0, // Valor por defecto si no existe
      img: props.img || "", // Valor por defecto si no existe
    };

    console.log("Agregando producto al carrito:", producto);
    addToCart(producto);
  };

  return (
    <div className="container-libro">
      <Link to={`/libro/${props.id}`} >
        <img className="portada-libro" src={props.img} alt="" />
      </Link>

      <div className="info-libro">
        <div className="titulo-libro">{props.titulo}</div>
        <div className="calificacion-libro">Calificación: {props.rate}</div>
        <div className="precio-libro">$ {props.precio}.00</div>
      </div>

      <div className="btn-agregar" style={{ marginTop: "auto" }}>
        <button
          className="btn-agregar-carrito"
          onClick={handleAddToCart}
          tabIndex={0}
        >
          {isInCart(props.id)
            ? `Agregar más (${getItemQuantity(props.id)} en carrito)`
            : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
}

export default Libro;
