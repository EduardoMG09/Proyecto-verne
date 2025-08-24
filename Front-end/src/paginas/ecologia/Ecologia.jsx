import React,  {useState, useEffect} from "react";
import '../../styles/App.css';
import Header from '../../components/Header.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Busqueda from '../../components/Busqueda.jsx';
import Libros_categoria from "../../components/Libros-categoria.jsx";
import Filtros from "../../components/Filtros.jsx";
import NavbarMobile from "../../components/NavbarMobile.jsx";

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
    <Busqueda />
    <Libros_categoria
    categoria="Ecologia" 
    />
    <Filtros/>
    </>
  )
}

export default Novela;
