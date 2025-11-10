import React from "react";
import "../../styles/App.css";
import Navbar from "../../components/Navbar.jsx";
import Checkout from "../../components/Checkout.jsx";
import "../../styles/Verificar.css";

function Verificar() {
  return (
    <div className="inicio-contain">
      <Navbar />
      <Checkout />
    </div>
  );
}

export default Verificar;
