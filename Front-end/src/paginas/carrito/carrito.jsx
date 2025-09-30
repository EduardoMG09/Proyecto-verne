import "../../styles/App.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Navbar from "../../components/Navbar.jsx"
import Compras from "../../components/Compras.jsx"

function Carrito() {
  return (
    <div className="page-container">
      <Navbar />
      <Compras />
    </div>
  )
}

export default Carrito
