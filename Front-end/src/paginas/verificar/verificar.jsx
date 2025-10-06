import React from "react";
import "../../styles/App.css";
import Navbar from "../../components/Navbar.jsx";
import Checkout from "../../components/Checkout.jsx";

function Verificar() {
  return (
    <div className="inicio-contain">
      <Navbar />
      <div className="verificar-contain">
        <Checkout />
      </div>
    </div>
  );
}

export default Verificar;
