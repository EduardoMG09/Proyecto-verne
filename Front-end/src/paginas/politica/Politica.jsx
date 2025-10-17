import React from "react";
import "../../styles/App.css";
import Navbar from "../../components/Navbar.jsx";
import Libros_categoria from "../../components/Libros-categoria.jsx";
import Filtros from "../../components/Filtros.jsx";
import Recomendaciones from "../../components/Recomendaciones.jsx";

function Politica() {
  return (
    <>
      <Navbar />
      <Recomendaciones categoria="Política" />
      <Libros_categoria categoria="Política" />
      <Filtros />
    </>
  );
}

export default Politica;
