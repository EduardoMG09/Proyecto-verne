"use client"

import { useState } from "react"
import "../styles/Filtros.css"
import "rc-slider/assets/index.css"
import PriceFilter from "./PriceFilter"
import CheckBox from "./CheckboxFilter"

function Filtros() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="btn-abrir-filtros" onClick={() => setIsOpen(true)} aria-label="Abrir filtros">
        <i className="bi bi-funnel-fill"></i>
      </button>

      {isOpen && (
        <div className="filtros-overlay" onClick={() => setIsOpen(false)}>
          <div className="filtros-modal" onClick={(e) => e.stopPropagation()}>
            <div className="filtros-header">
              <div className="titulo-filtros">Filtrar por:</div>
              <button className="btn-cerrar-filtros" onClick={() => setIsOpen(false)} aria-label="Cerrar filtros">
                ×
              </button>
            </div>
            <div className="contenedor-filtros">
              <div className="filtros">
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
                    <CheckBox name="Calificacion" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Filtros
