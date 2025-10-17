import React from "react";
import "../../styles/App.css";
import Navbar from "../../components/Navbar.jsx";
import Libros_categoria from "../../components/Libros-categoria.jsx";
import Filtros from "../../components/Filtros.jsx";
import Recomendaciones from "../../components/Recomendaciones.jsx";

function Finanzas() {
  return (
    <>
      <Navbar />
      <Recomendaciones categoria="Finanzas" />
      <Libros_categoria categoria="Finanzas" />
      <Filtros />
    </>
  );
}

export default Finanzas;
