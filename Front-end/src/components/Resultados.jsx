import React from 'react';
import { useLocation } from 'react-router-dom';
import Libro from '../components/Libro.jsx';
import libros from '../json/libros-imagenes.json';
import "../styles/Libreria.css";

function Resultados() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const busqueda = params.get('query') || '';
  const categoria = params.get('categoria') || '';

  // Filtra por título y si hay categoría, también filtra por categoría
  const resultados = Object.entries(libros.libros).filter(([titulo, info]) => {
    const matchTitulo = titulo.toLowerCase().includes(busqueda.toLowerCase());
    const matchCategoria = categoria === '' || info.categoria === categoria;
    return matchTitulo && matchCategoria;
  });

  return (
    <div className="container-libreria">
      <div className="titulo-libreria" style={{ fontSize: 40}}>Resultados de la búsqueda</div>
      <div className="libreria">
        {resultados.length > 0 ? (
          resultados.map(([titulo, info], index) => (
            <Libro
              key={index}
              titulo={titulo}
              id={info.id}
              rate={info.calificacion}
              precio={info.precio}
              autor={info.autor}
              img={info.imagen}
            />
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
}

export default Resultados;
