import React, { useContext } from "react";
import ItemLibro from "./ItemLibro.jsx";
import lib from "../json/libros-imagenes.json";
import "../styles/Libreria.css";
import { FiltrosContext } from "../context/Filtro.jsx";

function Libreria() {
  const { precioMaximo, calificacionMinima } = useContext(FiltrosContext);

  return (
    <div className="container-libreria">
      <div className="titulo-libreria">Productos</div>
      <div className="libreria">
        {[...Object.entries(lib.libros)]
          .sort((a, b) => a[1].id - b[1].id)
          .filter(([_, info]) => info.precio <= precioMaximo && info.calificacion >= calificacionMinima)
          .map(([libro, info]) => (
            <ItemLibro
              titulo={libro}
              key={info.id}
              id={info.id}
              autor={info.autor}
              reseña={info.reseña}
              categoria={info.categoria}
              img={info.imagen}
              rate={info.calificacion}
              precio={info.precio}
            />
          ))}
      </div>
    </div>
  );
}

export default Libreria;
