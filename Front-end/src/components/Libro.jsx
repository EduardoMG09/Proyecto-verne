import React from "react";
import "../styles/Libreria.css";

function Libro(props){
    return(
        <div className="container-libro">
            <div className="imagen-libro">
                <div className="libro">
                    <figure>
                        <img className="portada-libro" src={props.img} alt=""/>
                    </figure>
                </div>
            </div>
            <div className="titulo-libro">
                {props.titulo}
            </div>
            <div className="calificacion-libro">
                Calificación: {props.rate}
            </div>
            <div className="precio-libro">
                $ {props.precio}.00
            </div>
            <div className="btn-agregar">
                <button className="btn-agregar-carrito">
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default Libro;