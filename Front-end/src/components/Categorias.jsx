import React from "react";
import { Link } from "react-router-dom";
import "../styles/Categorias.css";
import Categoria from "./Categoria";
import cat from "../json/categorias.json";

function Categorias(){
    return (
        <div className="categorias-container">
            <div className="titulo-inicio-1">
                Inicio: Categorias
            </div>
            <div className="categorias">
            {
                Object.entries(cat.categorias).map(([categoria, info], index) =>(
                    <Link to={info.ruta}>
                        <Categoria 
                        name={categoria}
                        key={index}
                        img={info.imagen}
                        />
                    </Link>
                ))
            }
            </div>
        </div>
    )
}

export default Categorias;