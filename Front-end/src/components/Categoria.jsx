import React from "react";
import { Link } from "react-router-dom";
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
    .slice(0, 8);

  const categoria_name = props.categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

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
      
            <div className="categoria-link">
              <Link to={`/categoria_${categoria_name}`} className="btn-inicio-categoria">Ver más</Link>
            </div>
    </div>
  );
}

export default Categoria;