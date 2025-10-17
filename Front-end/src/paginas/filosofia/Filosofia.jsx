import React from "react";
import "../../styles/App.css";
import Navbar from "../../components/Navbar.jsx";
import Libros_categoria from "../../components/Libros-categoria.jsx";
import Filtros from "../../components/Filtros.jsx";
import Recomendaciones from "../../components/Recomendaciones.jsx";

function Filosofia() {
  return (
    <>
      <Navbar />
      <Recomendaciones categoria="Filosofía" />
      <Libros_categoria categoria="Filosofía" />
      <Filtros />
    </>
  );
}

export default Filosofia;
