import React from "react";
import "../styles/Categorias.css";
import Libro from "./Libro";
import libros from "../json/libros-imagenes.json";

function Categoria(props) {
  const categoriaProp = props.categoria?.toLowerCase() ?? "";

  const librosArray = Object.entries(libros.libros).map(([titulo, data]) => ({
    titulo,
    ...data,
    categoria: (data.categoria ?? []).map(cat => cat.toLowerCase()),
  }));

  //Libros disponibles en esa categoria
  const librosCategoriaTotal = librosArray
    .filter(libro => libro.categoria.some(cat => cat === categoriaProp));

  // Filtrar y limitar a los primeros 6 libros de la categoría (ignorando mayúsculas/minúsculas y tildes)
  const librosFiltrados = librosArray
    .filter(libro => libro.categoria.some(cat => cat === categoriaProp))
    .slice(0, 7);

  return (
    <div className="categoria-contenedor">
      <div className="categoria-titulo">
        <h2>{props.categoria}</h2>
        <h4>+{librosCategoriaTotal.length}</h4>
      </div>
      <div className="categoria-stock">
        {librosFiltrados.map((libro, idx) => (
          <Libro
          key={idx}
          id={libro.id}
          titulo={libro.titulo}
          autor={libro.autor}
          reseña={libro.reseña}
          rate={libro.calificacion}
          categoria={libro.categoria}
          precio={libro.precio}
          img={libro.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default Categoria;