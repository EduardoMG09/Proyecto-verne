import React from 'react';
import '../../styles/App.css';
import Header from '../../components/Header.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Busqueda from '../../components/Busqueda.jsx';
import Checkout from '../../components/Checkout.jsx';

function Verificar() {
  return (
    <>
    <Header />
    <Busqueda />
    </>
  )
}

export default Verificar
