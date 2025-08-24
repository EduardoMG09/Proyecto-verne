import React, { useState } from "react";
import "../styles/NavbarMobile.css";
import { Link } from "react-router-dom";
import sec from "../json/navbar.json"

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-mobile">
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "active" : ""}`}></div>
        <div className={`bar ${isOpen ? "active" : ""}`}></div>
        <div className={`bar ${isOpen ? "active" : ""}`}></div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="mobile-menu">
          <ul>
            {sec.secciones.map((item,index) => (  
            <Link to={item.ruta} key={index}>
                <div className="mobile-menu-item">
                    {item.nombre}
                </div>
            </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavbarMobile;
