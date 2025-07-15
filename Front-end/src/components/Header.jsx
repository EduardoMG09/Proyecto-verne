import React from "react";
import { Link } from "react-router-dom";
import sec from "../json/navbar.json"
import '../styles/Header.css'
import logo from "../assets/logo-verne.webp"

function Header(){
    return (
        <div className="container">
            <div className="container-header">
                <div className="logo">
                    <figure className="figure-logo">
                        <img src={logo} alt="Aprendizaje continuo" className="logo-img"/>
                    </figure>
                </div>
                <div className="navbar">
                    {
                        sec.secciones.map((item,i)=>(
                                <Link to={item.ruta} key={i} className="btn-navbar">
                                    <div className={`item-navbar ${item}`}>    
                                        {item.nombre}
                                    </div>
                                </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;