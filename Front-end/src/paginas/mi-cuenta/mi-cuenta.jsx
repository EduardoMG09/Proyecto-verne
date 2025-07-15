import React from 'react';
import '../../styles/App.css';
import Header from '../../components/Header.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Busqueda from '../../components/Busqueda.jsx';
import Login from "../../components/Login.jsx";

function App() {
  return (
    <>
    <Header />
    <Busqueda />
    <Login />
    </>
  )
}

export default App
