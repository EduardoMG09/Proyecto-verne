import React from 'react';
import '../../styles/App.css';
import Header from '../../components/Header.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Busqueda from '../../components/Busqueda.jsx';
import Compras from '../../components/Compras.jsx';

function Carrito() {
  return (
    <>
    <Header />
    <Busqueda />
    <Compras />
    </>
  )
}

export default Carrito;
