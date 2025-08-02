import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../styles/Busqueda.css";
import array from "../json/libro-categorias.json";
import array_libros from "../json/libros-imagenes.json";

function Busqueda(){
    const [categoria, setCategoria] = useState("");
    const [busqueda, setBusqueda] = useState("");



    return (
        <div className="container-2">
            <div className="container-up">
                <div className="titulo">
                    <div className="verne-titulo">
                        Verne
                    </div>
                    <div className="verne-subt">
                        Learning
                    </div>
                </div>
                <div className="busqueda">
                    <div className="busqueda-contenedor">
                        <small className="nota">Sitio con fines académicos.</small>
                        <div className="barra-busqueda">
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                className="input-busqueda"
                            />

                            <select
                                className="select-categorias"
                                name="Categorias"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                            >
                                <option value="" disabled>
                                Categoría
                                </option>
                                {array.categorias.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                                ))}
                            </select>

                            <button className="btn-buscar">
                                <i class="bi bi-search"></i>
                            </button>
                            
                            <Link to="/mi_cuenta">
                                <button className="btn-persona">
                                    <i class="bi bi-person-fill"></i>
                                </button>
                            </Link>
                            <Link to="/carrito">
                                <button className="btn-carrito">
                                    <i class="bi bi-cart-fill"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Busqueda;