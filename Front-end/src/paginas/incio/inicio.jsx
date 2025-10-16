import "../../styles/App.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Navbar from "../../components/Navbar.jsx"
import Recomendaciones from "../../components/Recomendaciones.jsx"
import Categorias from "../../components/Categorias.jsx"
import "../../styles/Inicio.css"

function Inicio() {
  return (
    <div className="page-container">
      <Navbar />
      <Recomendaciones 
      categoria={null}
      />
      <Categorias />
    </div>
  )
}

export default Inicio
