import React from "react";
import '../../styles/App.css';
import Navbar from '../../components/Navbar.jsx';
import Libros_categoria from "../../components/Libros-categoria.jsx";
import Filtros from "../../components/Filtros.jsx";

function Politica() {
  return (
    <>
      <Navbar />
      <Libros_categoria categoria="Política" />
      <Filtros />
    </>
  );
}

export default Politica;
