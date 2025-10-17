import React from "react";
import { Link } from "react-router-dom";
import "../styles/Categorias.css";
import Categoria from "./Categoria";
import cat from "../json/categorias.json";

function Categorias() {
  return (
    <div className="categorias-container">
      <div className="titulo-inicio-1">Conoce todas nuestras categorias de libros</div>
      <div className="categorias">
        {Object.entries(cat.categorias).map(([categoria, info], index) => (
          <Categoria 
          categoria={categoria} 
          key={index} 
          ruta={info.ruta} />
        ))}
      </div>
    </div>
  );
}

export default Categorias;
