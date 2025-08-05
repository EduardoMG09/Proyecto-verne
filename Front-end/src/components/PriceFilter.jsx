import React, { useContext } from "react";
import "../styles/Filtros.css";
import { FiltrosContext } from "../context/Filtro";

function PriceFilter() {
    const { precioMaximo, setPrecioMaximo } = useContext(FiltrosContext);

    const handleChange = (e) => {
        setPrecioMaximo(Number(e.target.value));
    };

    return (
        <div className="Price-filter">
            <div className="input-range">
                <input
                    type="range"
                    className="Barr-Price"
                    onChange={handleChange}
                    min={100}
                    step={10}
                    value={precioMaximo}
                    max={1040}
                />
            </div>
            <div className="precio">
                <div className="valor-precio">Precio máximo: ${precioMaximo}.00</div>
            </div>
        </div>
    );
}

export default PriceFilter;
