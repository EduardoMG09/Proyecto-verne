import React from 'react';
import '../../styles/App.css';
import Header from '../../components/Header.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Busqueda from '../../components/Busqueda.jsx';
import Filtros from '../../components/Filtros.jsx';


function Carrito() {
  return (
    <>
    <Header />
    <Busqueda />
    <h1>Carrito</h1>
    </>
  )
}

export default Carrito
