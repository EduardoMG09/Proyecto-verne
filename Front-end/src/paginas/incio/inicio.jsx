import React from 'react';
import '../../styles/App.css';
import Header from '../../components/Header.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Busqueda from '../../components/Busqueda.jsx';
import Categorias from '../../components/Categorias.jsx';
import "../../styles/Inicio.css";

function Inicio() {
  return (
    <>
    <Header />
    <Busqueda />
    <Categorias />
    </>
  )
}

export default Inicio
