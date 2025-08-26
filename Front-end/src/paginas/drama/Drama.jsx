import React , { useState, useEffect } from "react";
import '../../styles/App.css';
import NavbarMobile from "../../components/NavbarMobile.jsx";
import Header from '../../components/Header.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Busqueda from '../../components/Busqueda.jsx';
import Libros_categoria from "../../components/Libros-categoria.jsx";
import Filtros from "../../components/Filtros.jsx";
import BusquedaMobile from '../../components/BusquedaMobile.jsx';

function Novela() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener("resize", handleResize);
  
      // Limpieza del evento
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
    <>
    {isMobile ? <NavbarMobile /> :<Header />}
    {isMobile ? <BusquedaMobile /> : <Busqueda />}
    <Libros_categoria
    categoria="Drama" 
    />
    <Filtros/>
    </>
  )
}

export default Novela;
