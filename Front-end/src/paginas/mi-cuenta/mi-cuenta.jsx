import React from "react";
import "../../styles/App.css";
import Navbar from "../../components/Navbar.jsx";
import Login from "../../components/Login.jsx";
import "../../styles/Verificar.css";
import "../../styles/Inicio.css"; // Para fondo/colores

function App() {
  return (
    <div className="inicio-container">
      <Navbar />
      {/* ...contenido actual de verificar... */}
      <div className="mi-cuenta-content">
        <Login />
      </div>
    </div>
  );
}

export default App;
