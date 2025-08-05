import React, {useContext} from "react";
import "../styles/Libros-categoria.css";
import libros from "../json/libros-imagenes.json";
import Libro from "../components/Libro.jsx";
import { FiltrosContext } from "../context/Filtro.jsx";

function Libros_categoria(props){
    const { precioMaximo } = useContext(FiltrosContext);
    
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
                librosFiltrados.filter(([_,info]) =>
                info.precio <= precioMaximo)
                .map(([nombre, info],index) =>(
                    <Libro
                    titulo={nombre}
                    id={info.id}
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