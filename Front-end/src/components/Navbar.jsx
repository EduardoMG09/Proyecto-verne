import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo-verne.webp";
import sec from "../json/navbar.json";
import array from "../json/libro-categorias.json";

function Navbar() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const manejarBusqueda = (e) => {
    e.preventDefault();
    if (busqueda.trim() !== "") {
      navigate(
        `/resultados?query=${encodeURIComponent(
          busqueda
        )}&categoria=${encodeURIComponent(categoria)}`
      );
    }
  };

  return (
    <nav className="navbar-modern">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-titulo">
          <Link to="/" className="navbar-logo">
            <img src={logo || "/placeholder.svg"} alt="Verne Learning" />
          </Link>
          <div className="logo-text">
            <span className="logo-title">Verne</span>
            <span className="logo-subtitle">Learning</span>
          </div>
        </div>

        {/* Search Bar */}
        <form className="navbar-search" onSubmit={manejarBusqueda}>
          <input
            type="text"
            placeholder="Buscar libros..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="search-input"
          />
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="search-select"
          >
            <option value="">Todas las categorías</option>
            {array.categorias.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <button type="submit" className="search-button">
            <i className="bi bi-search"></i>
          </button>
        </form>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {sec.secciones.map((item, i) => (
            <NavLink
              to={item.ruta}
              key={i}
              end={item.ruta === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {item.nombre}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`hamburger ${menuOpen ? "active" : ""}`}></span>
          <span className={`hamburger ${menuOpen ? "active" : ""}`}></span>
          <span className={`hamburger ${menuOpen ? "active" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        {sec.secciones.map((item, i) => (
          <NavLink
            to={item.ruta}
            key={i}
            end={item.ruta === "/"}
            className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.nombre}
          </NavLink>
        ))}
      </div>

      {/* Academic Note */}
      <div className="academic-note">Sitio con fines académicos</div>
    </nav>
  );
}

export default Navbar;
