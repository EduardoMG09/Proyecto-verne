import React from "react";
import "../../styles/App.css";
import Navbar from "../../components/Navbar.jsx";
import Libros_categoria from "../../components/Libros-categoria.jsx";
import Filtros from "../../components/Filtros.jsx";
import Recomendaciones from "../../components/Recomendaciones.jsx";

function Fantasia() {
  return (
    <>
      <Navbar />
      <Recomendaciones categoria="Fantasía" />
      <Libros_categoria categoria="Fantasía" />
      <Filtros />
    </>
  );
}

export default Fantasia;
