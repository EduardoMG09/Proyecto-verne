import React, { useContext } from "react";
import Libro from "./Libro.jsx";
import lib from "../json/libros-imagenes.json";
import "../styles/Libreria.css";
import { FiltrosContext } from "../context/Filtro.jsx";

function Libreria() {
  const { precioMaximo } = useContext(FiltrosContext);

  return (
    <div className="container-libreria">
      <div className="libreria">
        {Object.entries(lib.libros)
          .filter(([_, info]) => info.precio <= precioMaximo)
          .map(([libro, info], index) => (
            <Libro
              titulo={libro}
              key={index}
              id={info.id}
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
