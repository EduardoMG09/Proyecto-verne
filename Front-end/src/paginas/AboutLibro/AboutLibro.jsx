"use client";

import { useParams } from "react-router-dom";
import lib from "../../json/libros-imagenes.json";
import "../../styles/LibroDetalle.css";
import Navbar from "../../components/Navbar";
import { FaCircle } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";

function LibroDetalle() {
  const { id } = useParams();
  const { addToCart, isInCart, getItemQuantity } = useCart();
  // Buscar por el campo id del JSON para evitar errores de orden en Object.entries
  const libro = Object.entries(lib.libros).find(
    ([_titulo, info]) => info.id === Number(id)
  );

  if (!libro) {
    return <p>Libro no encontrado</p>;
  }

  const [titulo, info] = libro;

  const handleAddToCart = () => {
    if (!info?.id || !titulo || !info?.precio) return;
    const producto = {
      id: info.id,
      titulo,
      precio: info.precio,
      reseña: info.reseña || "",
      autor: info.autor || "Desconocido",
      rate: info.calificacion || 0,
      img: info.imagen || "",
    };
    addToCart(producto);
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="detalle-container">
        <div className="container-detalle-inner">
          {/*container superior*/}
          <div className="container-up">
            <img
              src={info.imagen || "/placeholder.svg"}
              alt={titulo}
              className="detalle-img"
            />
          </div>

          {/*container inferior*/}
          <div className="container-down">
            <h2 className="detalle-title">{titulo}</h2>
            <p className="detalle-author">{info.autor}</p>
            <div className="detalle-calificacion">
              <label>Calificación:</label>{" "}
              <label className="detalle-star">
                {"★".repeat(info.calificacion)}{" "}
                {"☆".repeat(5 - info.calificacion)}
              </label>{" "}
              <label>{`(${info.calificacion})`}</label>
            </div>
            <div className="categorias">
              <h3>Categorias</h3>
              {Object.entries(info.categoria).map((categoria, index) => (
                <label key={index} className="categoria">
                  <FaCircle className="item-circle" /> {categoria[1]}
                </label>
              ))}
            </div>
            <div className="detalle-description">
              <strong>Reseña:</strong> {info.reseña}
            </div>
            <div className="detalle-precio">
              Precio: ${info.precio}.00
            </div>
            <div className="btn-item-carrito">
              <button onClick={handleAddToCart}>
                {isInCart(info.id)
                  ? `Agregar más (${getItemQuantity(info.id)} en carrito)`
                  : "Añadir al carrito"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LibroDetalle;
