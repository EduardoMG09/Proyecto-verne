import React from "react";
import { Link } from "react-router-dom";
import "../styles/ItemLibro.css";

function ItemLibro(props) {
  return (
    <Link to={`/libro/${props.id}`} className="item-libro">
      <div className="item-libro-inner">
          <img src={props.img} alt={props.titulo} className="item-libro-img" />
        <div className="item-libro-info">
          <div className="item-libro-titulo">{props.titulo}</div>
          <div className="item-libro-autor">Por: {props.autor}</div>
          <div className="item-libro-precio">${props.precio}.00</div>
          <div className="item-libro-rate">
            <p style={{ color: "#000"}}>Calificación:</p> {"★".repeat(props.rate)}
            {"☆".repeat(5 - props.rate)}
          </div>
          <div className="item-libro-reseña"><strong>Reseña: </strong>{props.reseña}</div>
        </div>
      </div>
      <div className="item-categorias">
        <h3>Categorias:</h3>
        {props.categoria && props.categoria.map((cat, idx) => (
          <span key={idx} className="item-libro-categoria">
            {cat}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default ItemLibro;
