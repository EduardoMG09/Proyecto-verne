// src/components/Busqueda.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Busqueda.css";
import array from "../json/libro-categorias.json";

function Busqueda() {
    const [busqueda, setBusqueda] = useState("");
    const [categoria, setCategoria] = useState("");
    const navigate = useNavigate();

    const manejarBusqueda = (e) => {
        e.preventDefault();
        if (busqueda.trim() !== "") {
            navigate(`/resultados?query=${encodeURIComponent(busqueda)}&categoria=${encodeURIComponent(categoria)}`);
        }
    };

    return (
        <div className="container-2">
            <div className="container-up">
                <div className="titulo">
                    <div className="verne-titulo">Verne</div>
                    <div className="verne-subt">Learning</div>
                </div>

                <div className="busqueda">
                    <div className="busqueda-contenedor">
                        <small className="nota">Sitio con fines académicos.</small>
                        <form className="barra-busqueda" onSubmit={manejarBusqueda}>
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                className="input-busqueda"
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                            />

                            <select
                                className="select-categorias"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                            >
                                <option value="">Categoría</option>
                                {array.categorias.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>

                            <button 
                            className="btn-buscar" 
                            type="submit" 
                            onClick={manejarBusqueda}
                            >
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Busqueda;
