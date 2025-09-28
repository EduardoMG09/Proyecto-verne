import { useParams } from "react-router-dom";
import lib from "../../json/libros-imagenes.json";
import "../../styles/LibroDetalle.css";

//Componentes
import Header from "../../components/Header";

function LibroDetalle() {
  const { id } = useParams();
  const libro = Object.entries(lib.libros)[id]; // porque mapeas por índice en Libreria

  if (!libro) {
    return <p>Libro no encontrado</p>;
  }

  const [titulo, info] = libro;

  return (
    <div className="detalle-container">
      <Header />
      <div className="container-detalle-inner">
        <img src={info.imagen} alt={titulo} className="detalle-img" />
        <div className="detalle-info">
          <h1>{titulo}</h1>
          <p>
            <strong>Precio:</strong> ${info.precio}
          </p>
          <p>
            <strong>Calificación:</strong> ⭐ {info.calificacion}
          </p>
          <p>
            <strong>Descripción:</strong> {info.descripcion}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LibroDetalle;
