import React from "react";
import "../styles/Recomendado.css";

function Recomendado(props){
    const descripcion = props.reseña || props.descripcion || "";
    return(
        <div className="container-recomendado">
            <div>
                <h2>{props.titulo}</h2>
                {descripcion && <p>{descripcion}</p>}
            </div>
            <img src={props.imagen} alt={props.titulo} />
        </div>
    )
}

export default Recomendado;