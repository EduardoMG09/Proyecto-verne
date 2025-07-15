import React from "react";
import { Link } from "react-router-dom";
import "../styles/Categorias.css";

function Categoria(props){
    return(
        <div className="categoria-contenedor">
            <div className="categoria">
                <button className="btn-categoria">
                    <figure className="imagen-categoria">
                        <img src={props.img} alt="" />
                    </figure>
                    <div className="titulo-categoria">
                        {props.name}
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Categoria;