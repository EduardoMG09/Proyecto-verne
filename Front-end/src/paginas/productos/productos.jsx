import React from 'react';
import '../../styles/App.css';
import Header from '../../components/Header.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Busqueda from '../../components/Busqueda.jsx';
import Filtros from '../../components/Filtros.jsx';
import Libreria from '../../components/Libreria.jsx';

function Productos() {

  return (
    <>
    <Header />
    <Busqueda />
    <Libreria />
    <Filtros />
    
    </>
  )
}

export default Productos
