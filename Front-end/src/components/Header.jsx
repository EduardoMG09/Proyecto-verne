import React from "react";
import logo from "../assets/Logo-paola-nayeli.webp";
import '../styles/Header.css';
import nav from "../json/nav-var-opciones.json";
import icons from "../json/clases_iconos.json";
import cat from "../json/categorias_libros.json";

function Header(){
    return(
        <div className="container">
            <div className="Contenedor-flex">
                <div className="header">
                    <div className="contenedor-header">
                        <div className="cont-hed one-header">
                            <figure className="logo-header">
                                <img src={logo} alt="" />
                            </figure>
                            <div className="search">
                                <div className="search-1">
                                    <div className="sitio">
                                        Sitio con fines academicos
                                    </div>
                                    <div className="busqueda">
                                        <input type="search" className="search-input" />
                                    </div>
                                </div>
                                <div className="search-2">
                                    <div className="clasificacion">
                                        <select name="" id="" className="categorias-select">
                                            <optgroup label="Categorias">
                                                {cat.categorias.map((categoria) =>(
                                                    <option value={`${categoria}`}>{categoria}</option>
                                                ))}
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="iconos">
                                {icons.iconos.map((icono) =>(
                                       <i class={`bi ${icono}`}></i> 
                                    ))
                                }
                            </div>
                        </div>
                        <div className="cont-hed two-header">
                            <div className="titulo">
                                Verne
                            </div>
                            <div className="subtitulo">
                                Learning
                            </div>
                        </div>
                        <div className="cont-hed three-header">
                            <nav>
                                {nav.secciones.map((opcion) =>(
                                    <div className="opcion-nav">
                                        {opcion}
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;