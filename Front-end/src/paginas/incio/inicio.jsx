import "../../styles/App.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Navbar from "../../components/Navbar.jsx"
import Categorias from "../../components/Categorias.jsx"
import "../../styles/Inicio.css"

function Inicio() {
  return (
    <div className="page-container">
      <Navbar />
      <Categorias />
    </div>
  )
}

export default Inicio
