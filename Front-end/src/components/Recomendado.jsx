import React from "react";
import "../styles/Recomendado.css";
import { FaStar } from "react-icons/fa";

function Recomendado(props){
    const descripcion = props.reseña || props.descripcion || "";
    return(
        <div className="container-recomendado">
            <div>
                <h2>{props.titulo}</h2>
                <p><strong>Calificación:</strong> {props.rate} <FaStar  className="star-rec"/></p>
                {descripcion && <p>{descripcion}</p>}
            </div>
            <img src={props.imagen} alt={props.titulo} />
        </div>
    )
}

export default Recomendado;