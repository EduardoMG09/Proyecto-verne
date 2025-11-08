import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Resultados from "../../components/Resultados.jsx";
import Navbar from "../../components/Navbar.jsx";

function Resultado() {
  const location = useLocation();
  const { busqueda } = location.state || { busqueda: "" };
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
    <div className="page-container">
      <Navbar />
      <Resultados busqueda={busqueda} />
    </div>
  );
}

export default Resultado;
