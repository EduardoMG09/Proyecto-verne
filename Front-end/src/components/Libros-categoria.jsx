import React from "react";
import "../styles/Libros-categoria.css";
import libros from "../json/libros-imagenes.json";
import Libro from "../components/Libro.jsx";

function Libros_categoria(props){
    const librosFiltrados = Object.entries(libros.libros).filter(([_, info]) =>
                    info.categoria && info.categoria.includes(props.categoria)
                );
    return(
        <div className="container-cat-3">
            <div className="titulo-2">
                {props.categoria}
            </div>
            <div className="libreria-2">
            {
                librosFiltrados.map(([nombre, info],index) =>(
                    <Libro
                    titulo={nombre}
                    key={index}
                    rate={info.calificacion}
                    precio={info.precio}
                    img={info.imagen}
                    />
                        
                ))
            }
            </div>
        </div>
    )

}

export default Libros_categoria;