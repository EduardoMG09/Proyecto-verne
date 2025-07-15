import React from "react";
import '../../styles/App.css';
import Header from '../../components/Header.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Busqueda from '../../components/Busqueda.jsx';
import Libros_categoria from "../../components/Libros-categoria.jsx";

function Novela() {
  return (
    <>
    <Header />
    <Busqueda />
    <Libros_categoria 
    />
    </>
  )
}

export default Novela;
