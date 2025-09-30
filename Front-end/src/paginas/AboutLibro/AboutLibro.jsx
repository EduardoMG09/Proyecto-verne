"use client"

import { useParams } from "react-router-dom"
import lib from "../../json/libros-imagenes.json"
import "../../styles/LibroDetalle.css"
import Navbar from "../../components/Navbar"

function LibroDetalle() {
  const { id } = useParams()
  const libro = Object.entries(lib.libros)[id]

  if (!libro) {
    return <p>Libro no encontrado</p>
  }

  const [titulo, info] = libro

  return (
    <div className="page-container">
      <Navbar />
      <div className="detalle-container">
        <div className="container-detalle-inner">
          {/*container superior*/}
          <div className="container-up">
            <div className="container-left-up">
              <div className="detalle-container-imagen">
                <img src={info.imagen || "/placeholder.svg"} alt={titulo} className="detalle-img" />
              </div>
            </div>
            <div className="container-right-up">
              <div className="detalle-container-titulo">
                <h1>{titulo}</h1>
              </div>

              <div className="detalle-container-autor">
                <h1>Autor: {info.autor}</h1>
              </div>
            </div>
          </div>

          {/*container inferior*/}
          <div className="container-down">
            <div className="container-left-down">
              <div className="detalle-container-descripcion">
                <h1>Descripción:</h1>
                <h2>{info.reseña}</h2>
              </div>
            </div>

            <div className="container-right-down">
              <div className="detalle-container-precio">
                <h3>Precio: ${info.precio}.00</h3>
              </div>

              <div className="detalle-container-rate">
                <h1>Calificación: </h1>
                <label>{info.calificacion}</label>
              </div>

              <div className="detalle-container-categoria">
                <h1>Categorias:</h1>
                <ul>
                  {Object.entries(info.categoria).map(([key, value], index) => (
                    <li className="item-categoria" key={index}>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LibroDetalle
