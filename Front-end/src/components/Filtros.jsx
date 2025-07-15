import React from "react";
import "../styles/Filtros.css";
import "rc-slider/assets/index.css";
import PriceFilter from "./PriceFilter";
import CheckBox from "./CheckboxFilter";

function Filtros() {

    return (
        <div className="container-5">
            <div className="contenedor-filtros">
                <div className="titulo-filtros">
                    Filtrar por:
                </div>
                <div className="filtros">
                    <div className="filtro filtro-precio">
                        <div className="filtro-titulo">
                            Filtrar por precio:
                        </div>
                        <div className="filtro-componente">
                            <PriceFilter/>
                        </div>
                    </div>
                    <div className="filtro filtro-stock">
                        <div className="filtro-titulo">
                            Filtrar por existencia:
                        </div>
                        <div className="filtro-componente">
                            <CheckBox
                            name="Existencia"
                            />
                        </div>
                    </div>
                    <div className="filtro filtro-rating">
                        <div className="filtro-titulo">
                            Filtrar por calificación:
                        </div>
                        <div className="filtro-componente">
                            <CheckBox
                            name="Calificacion"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filtros;