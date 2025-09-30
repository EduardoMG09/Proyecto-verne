import "../../styles/App.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Navbar from "../../components/Navbar.jsx"
import Filtros from "../../components/Filtros.jsx"
import Libreria from "../../components/Libreria.jsx"

function Productos() {
  return (
    <div className="page-container">
      <Navbar />
      <Libreria />
      <Filtros />
    </div>
  )
}

export default Productos
