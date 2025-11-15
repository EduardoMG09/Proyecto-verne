import React, { useContext } from "react";
import "../styles/Filtros.css";
import { FiltrosContext } from "../context/Filtro";

function RatingFilter() {
  const { calificacionMinima, setCalificacionMinima } = useContext(FiltrosContext);

  const handleChange = (e) => {
    setCalificacionMinima(Number(e.target.value));
  };

  return (
    <div className="Rating-filter">
      <div className="input-range">
        <input
          type="range"
          className="Barr-Rating"
          min={0}
          max={5}
          step={0.1}
          value={calificacionMinima}
          onChange={handleChange}
        />
      </div>
      <div className="rating">
        <div className="valor-rating">Calificación mínima: {calificacionMinima.toFixed(1)} ★</div>
      </div>
    </div>
  );
}

export default RatingFilter;