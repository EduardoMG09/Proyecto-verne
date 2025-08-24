import React, { useEffect , useState } from 'react';
import '../../styles/App.css';
import Header from '../../components/Header.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Busqueda from '../../components/Busqueda.jsx';
import Categorias from '../../components/Categorias.jsx';
import NavbarMobile from '../../components/NavbarMobile.jsx';
import "../../styles/Inicio.css";

function Inicio() {
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
    <Busqueda />
    <Categorias />
    </>
  )
}

export default Inicio
