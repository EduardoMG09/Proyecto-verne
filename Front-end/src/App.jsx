import React from "react";
import { Routes, Route } from 'react-router-dom';
import "rc-slider/assets/index.css";
import Inicio from "../src/paginas/incio/inicio.jsx";
import My_cuenta from "../src/paginas/mi-cuenta/mi-cuenta.jsx";
import Productos from "../src/paginas/productos/productos.jsx";
import Carrito from "../src/paginas/carrito/carrito.jsx";
import Verificar from "../src/paginas/verificar/verificar.jsx";
import Clasicos from "../src/paginas/clasicos/clasicos.jsx";
import Drama from "../src/paginas/drama/Drama.jsx";
import Ecologia from "../src/paginas/ecologia/Ecologia.jsx"
import Fantasia from "../src/paginas/fantasia/Fantasia.jsx"
import Filosofia from "../src/paginas/filosofia/Filosofia.jsx"
import Finanzas from "../src/paginas/finanzas/Finanzas.jsx";
import Historia from "../src/paginas/historia/Historia.jsx"
import Infantil from "../src/paginas/infantil/Infantil.jsx"
import Juvenil from "../src/paginas/juvenil/Juvenil.jsx"
import Literatura from "../src/paginas/mexicana/Literatura.jsx"
import Mitologia from "../src/paginas/mitologia/Mitologia.jsx"
import Motivacional from "../src/paginas/motivacional/Motivacional.jsx"
import Novela from "../src/paginas/novela/Novela.jsx"
import Politica from "../src/paginas/politica/Politica.jsx"
import Romance from "../src/paginas/romance/Romance.jsx"
import Terror from "../src/paginas/terror/Terror.jsx"
import { CartProvider } from "./context/Cart.jsx";

function App(){
  return(
    <CartProvider>
    <Routes>
      <Route path="/" element={<Inicio />} />  
      <Route path="/mi_cuenta" element={<My_cuenta />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/verificar" element={<Verificar />} />
      <Route path="/categoria_clasicos" element={<Clasicos />} />
      <Route path="/categoria_drama" element={<Drama />} />
      <Route path="/categoria_ecologia" element={<Ecologia />} />
      <Route path="/categoria_fantasia" element={<Fantasia />} />
      <Route path="/categoria_filosofia" element={<Filosofia />} />
      <Route path="/categoria_finanzas" element={<Finanzas />} />
      <Route path="/categoria_historia" element={<Historia />} />
      <Route path="/categoria_infantil" element={<Infantil />} />
      <Route path="/categoria_juvenil" element={<Juvenil />} />
      <Route path="/categoria_literatura" element={<Literatura />} />
      <Route path="/categoria_mitologia" element={<Mitologia />} />
      <Route path="/categoria_motivacional" element={<Motivacional />} />
      <Route path="/categoria_novela" element={<Novela />} />
      <Route path="/categoria_politica" element={<Politica />} />
      <Route path="/categoria_romance" element={<Romance />} />
      <Route path="/categoria_terror" element={<Terror />} />
    </Routes>
    </CartProvider>
  )
}

export default App;
