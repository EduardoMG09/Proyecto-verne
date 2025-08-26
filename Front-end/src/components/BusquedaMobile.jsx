// src/components/Busqueda.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/busqueda-mobile.css";
import array from "../json/libro-categorias.json";
import img from "/logo-verne.webp";

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
        <div className="container-mobile">
            <div className="container-up-mobile">
                <div className="container-logo-titulo">
                    <div className="logo-mobile">
                        <a href="https://paolacortezeducacion.com/">
                            <img src={img} alt="paola-nayeli" />
                        </a>
                    </div>
                    <div className="titulo-mobile">
                        <div className="verne-titulo-mobile">Verne</div>
                        <div className="verne-subt-mobile">Learning</div>
                    </div>
                </div>
                <div className="busqueda-mobile">
                    <div className="busqueda-mobile-contenedor">
                        <small className="nota">Sitio con fines académicos.</small>
                        <form className="barra-busqueda-mobile" onSubmit={manejarBusqueda}>
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                className="input-busqueda-mobile"
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                            />

                            <select
                                className="select-categorias-mobile"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                            >
                                <option value="">Categoría</option>
                                {array.categorias.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>

                            <button 
                            className="btn-buscar-mobile" 
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
