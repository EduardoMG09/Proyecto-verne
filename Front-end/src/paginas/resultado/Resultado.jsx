import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header.jsx';
import Busqueda from '../../components/Busqueda.jsx';
import Resultados from '../../components/Resultados.jsx';

function Resultado() {
  const location = useLocation();
  const { busqueda } = location.state || { busqueda: '' };

  return (
    <>
      <Header />
      <Busqueda />
      <Resultados busqueda={busqueda} />
    </>
  );
}

export default Resultado;
