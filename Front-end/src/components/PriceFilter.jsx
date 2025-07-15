import React, { useState } from "react";
import "../styles/Filtros.css";

function PriceFilter(){
    const [price, setPrice] = useState(50);
    
    const hanldeChange = (e) => {
        setPrice(Number(e.target.value));
    };
    return(
        <div className="Price-filter">
            <div className="input-range">
                <input 
                type="range"
                className="Barr-Price" 
                onChange={hanldeChange} 
                min={100} 
                step={10}
                value={price}
                max={1040}
                />
            </div>
            <div className="precio">
                <div className="valor-precio">Precio minimo: ${price}.00</div>
            </div>
        </div>
    )
}

export default PriceFilter;