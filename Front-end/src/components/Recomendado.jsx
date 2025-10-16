import React from "react";
import "../styles/Recomendado.css";

function Recomendado(props){
    return(
        <div className="container-recomendado">
            <h2>{props.titulo}</h2>
            <p>{props.descripcion}</p>
            <img src={props.imagen} alt={props.titulo} />
        </div>
    )
}

export default Recomendado;