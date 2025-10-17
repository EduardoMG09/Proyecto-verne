import React from "react";
import "../../styles/App.css";
import Navbar from "../../components/Navbar.jsx";
import Libros_categoria from "../../components/Libros-categoria.jsx";
import Filtros from "../../components/Filtros.jsx";
import Recomendaciones from "../../components/Recomendaciones.jsx";

function Literatura() {
  return (
    <>
      <Navbar />
      <Recomendaciones categoria="Literatura-mexicana" />
      <Libros_categoria categoria="Literatura-mexicana" />
      <Filtros />
    </>
  );
}

export default Literatura;
