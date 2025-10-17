import React,  {useState, useEffect} from "react";
import '../../styles/App.css';
import Header from '../../components/Header.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Busqueda from '../../components/Busqueda.jsx';
import Libros_categoria from "../../components/Libros-categoria.jsx";
import Filtros from "../../components/Filtros.jsx";
import Recomendaciones from "../../components/Recomendaciones.jsx";
import Navbar from "../../components/Navbar.jsx";

function Novela() {
  return (
    <>
      <Navbar />
      <Recomendaciones categoria="Ecología" />
      <Libros_categoria
        categoria="Ecología"
      />
    <Filtros/>
    </>
  )
}

export default Novela;
