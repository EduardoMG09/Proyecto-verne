import React, {useContext} from "react";
import "../styles/Libros-categoria.css";
import libros from "../json/libros-imagenes.json";
import Libro from "../components/Libro.jsx";
import { FiltrosContext } from "../context/Filtro.jsx";

function Libros_categoria(props){
    const { precioMaximo, calificacionMinima } = useContext(FiltrosContext);
    // Filtrar por categoría exacta (respetando acentos) y ordenar por id ascendente
    const librosFiltrados = Object.entries(libros.libros)
        .filter(([_, info]) => info.categoria && info.categoria.includes(props.categoria))
        .sort((a, b) => (a[1].id ?? 0) - (b[1].id ?? 0));
    return(
        <div className="container-cat-3">
            <div className="titulo-2">
                Nuestros libros {props.categoria}
            </div>
            <div className="libreria-2">
            {
                librosFiltrados
                .filter(([_,info]) => info.precio <= precioMaximo && info.calificacion >= calificacionMinima)
                .map(([nombre, info]) =>(
                    <Libro
                    titulo={nombre}
                    id={info.id}
                    key={info.id}
                    rate={info.calificacion}
                    precio={info.precio}
                    autor={info.autor}
                    img={info.imagen}
                    />
                        
                ))
            }
            </div>
        </div>
    )

}

export default Libros_categoria;