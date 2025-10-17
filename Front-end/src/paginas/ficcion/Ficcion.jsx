import React from "react";
import "../../styles/App.css";
import Navbar from "../../components/Navbar.jsx";
import Libros_categoria from "../../components/Libros-categoria.jsx";
import Filtros from "../../components/Filtros.jsx";

function Ficcion() {
  return (
    <>
      <Navbar />
      <Libros_categoria categoria="Ficción" />
      <Filtros />
    </>
  );
}

export default Ficcion;
