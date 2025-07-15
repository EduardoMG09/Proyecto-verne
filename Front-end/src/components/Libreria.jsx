import React from "react";
import Libro from "./Libro.jsx";
import lib from "../json/libros-imagenes.json";
import "../styles/Libreria.css";

function Libreria(){
    return(
        <div className="container-libreria">
            <div className="libreria">
            {    
            Object.entries(lib.libros).map(([libro,info], index)=>(
                <Libro 
                titulo={libro}
                key={index}
                img={info.imagen}
                rate={info.calificacion}
                precio={info.precio}
                />                    
            ))
            }
            </div>
        </div>
    )
}

export default Libreria;