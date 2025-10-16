import React from "react";
import Recomendado from "./Recomendado.jsx";
import data from "../json/libros-imagenes.json";
import "../styles/Recomendaciones.css";

function Recomendaciones({ categoria }) {
    // Convertimos el objeto de libros en una lista de [titulo, info]
    const entries = Object.entries(data.libros);

    // Determinar si debemos filtrar: si categoria es falsy o 'todas', no filtramos
    const shouldFilter = categoria && categoria !== "todas";

    // Filtrado por una o múltiples categorías
    const filtered = shouldFilter
        ? Array.isArray(categoria)
            ? entries.filter(([_titulo, info]) =>
                    Array.isArray(info.categoria) && categoria.some((cat) => info.categoria.includes(cat))
                )
            : entries.filter(([_titulo, info]) =>
                    Array.isArray(info.categoria) && info.categoria.includes(categoria)
                )
        : entries;

    // Ordenamos por id ascendente para consistencia y limitamos a 6
    const ordered = [...filtered]
        .sort((a, b) => (a[1].id ?? 0) - (b[1].id ?? 0))
        .slice(0, 6);

    return (
        <div className="container-recomendaciones">
            <h2>Recomendaciones</h2>
                {ordered.map(([titulo, info]) => (
                <Recomendado
                    key={info.id}
                    id={info.id}
                    titulo={titulo}
                    autor={info.autor}
                    reseña={info.reseña}
                    categoria={info.categoria}
                    imagen={info.imagen}
                    rate={info.calificacion}
                    precio={info.precio}
                />
                ))}
            
        </div>
    );
}

export default Recomendaciones;
