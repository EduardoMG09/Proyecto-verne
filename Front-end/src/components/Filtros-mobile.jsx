import React, { useState } from "react";
import "../styles/Filtros-mobile.css";
import "rc-slider/assets/index.css";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

function FiltrosModal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            {/* Botón con ícono de filtros */}
            <button className="btn-icon-filtros" onClick={openModal}>
                <i className="bi bi-filter"></i>
            </button>

            {/* Fondo oscuro */}
            {isOpen && <div className="modal-overlay" onClick={closeModal}></div>}

            {/* Contenido del modal */}
            <div className={`modal-filtros ${isOpen ? "show" : ""}`}>
                <div className="modal-header">
                    <h2>Filtrar productos</h2>
                    <button className="btn-close" onClick={closeModal}>
                        &times;
                    </button>
                </div>

                <div className="modal-body">
                    <div className="filtro filtro-precio">
                        <div className="filtro-titulo">Filtrar por precio:</div>
                        <div className="filtro-componente">
                            <PriceFilter />
                        </div>
                    </div>

                    <div className="filtro filtro-stock">
                        <div className="filtro-titulo">Filtrar por existencia:</div>
                        <div className="filtro-componente">
                            <CheckBox name="Existencia" />
                        </div>
                    </div>

                    <div className="filtro filtro-rating">
                        <div className="filtro-titulo">Filtrar por calificación:</div>
                        <div className="filtro-componente">
                            <RatingFilter />
                        </div>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn-apply" onClick={closeModal}>
                        Aplicar filtros
                    </button>
                </div>
            </div>
        </>
    );
}

export default FiltrosModal;
