import React , {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header.jsx';
import Busqueda from '../../components/Busqueda.jsx';
import Resultados from '../../components/Resultados.jsx';
import NavbarMobile from '../../components/NavbarMobile.jsx';

function Resultado() {
  const location = useLocation();
  const { busqueda } = location.state || { busqueda: '' };
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
      <Resultados busqueda={busqueda} />
    </>
  );
}

export default Resultado;
