"use client";

import { useParams } from "react-router-dom";
import lib from "../../json/libros-imagenes.json";
import "../../styles/LibroDetalle.css";
import Navbar from "../../components/Navbar";

function LibroDetalle() {
  const { id } = useParams();
  // Buscar por el campo id del JSON para evitar errores de orden en Object.entries
  const libro = Object.entries(lib.libros).find(([_titulo, info]) => info.id === Number(id));

  if (!libro) {
    return <p>Libro no encontrado</p>;
  }

  const [titulo, info] = libro;

  return (
    <div className="page-container">
      <Navbar />
      <div className="detalle-container">
        <div className="container-detalle-inner">
          {/*container superior*/}
          <div className="container-up">
            <img
              src={info.imagen || "/placeholder.svg"}
              alt={titulo}
              className="detalle-img"
            />
          </div>

          {/*container inferior*/}
          <div className="container-down">
            <h2 className="detalle-title">{titulo}</h2>
            <p className="detalle-author">
              <strong>Autor:</strong> {info.autor}
            </p>
            <p className="detalle-description">
              <strong>Descripción:</strong> {info.reseña}
            </p>
            <p className="detalle-genre">
              <strong>Género:</strong> {info.categoria}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LibroDetalle;
