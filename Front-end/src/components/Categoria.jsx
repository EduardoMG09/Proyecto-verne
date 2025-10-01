import React from "react";
import "../styles/Categorias.css";
import libros from "../json/libros-imagenes.json";
import CategoryRow from "./CategoryRow";

// helper para quitar acentos y pasar a minúsculas
function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function Categoria(props) {
  const librosArray = Object.entries(libros.libros).map(([titulo, data]) => ({
    titulo,
    ...data,
    categoria: data.categoria ?? [], // si no existe, array vacío
  }));

  const librosFiltrados = librosArray.filter((libro) =>
    libro.categoria.some(
      (cat) => normalize(cat) === normalize(props.categoria)
    )
  );

  return (
    <div className="categoria-contenedor">
      <div className="categoria-titulo">
        <h2>{props.categoria}</h2>
        <h4>+{librosFiltrados.length}</h4>
      </div>
      <div className="categoria-stock">
        {librosFiltrados.length > 0 ? (
          <CategoryRow title={props.categoria} books={librosFiltrados} />
        ) : (
          <p>No hay libros en esta categoría.</p>
        )}
      </div>
    </div>
  );
}

export default Categoria;
