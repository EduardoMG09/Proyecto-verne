import React, { useEffect, useMemo, useState } from "react";
import Recomendado from "./Recomendado.jsx";
import data from "../json/libros-imagenes.json";
import "../styles/Recomendaciones.css";

function Recomendaciones({ categoria }) {
    // Convertimos el objeto de libros en una lista de [titulo, info]
    const entries = useMemo(() => Object.entries(data.libros), []);

    // Determinar si debemos filtrar: si categoria es falsy o 'todas', no filtramos
    const shouldFilter = categoria && categoria !== "todas";

    // Filtrado por una o múltiples categorías (memoizado por dependencia de categoria)
    const filtered = useMemo(() => {
        if (!shouldFilter) return entries;
        return Array.isArray(categoria)
            ? entries.filter(([_titulo, info]) => Array.isArray(info.categoria) && categoria.some((cat) => info.categoria.includes(cat)))
            : entries.filter(([_titulo, info]) => Array.isArray(info.categoria) && info.categoria.includes(categoria));
    }, [entries, shouldFilter, categoria]);

    // Ordenamos por id ascendente para consistencia y limitamos a 7 (memoizado)
    const ordered = useMemo(() => {
        return [...filtered]
            .sort((a, b) => (a[1].id ?? 0) - (b[1].id ?? 0))
            .slice(0, 7);
    }, [filtered]);

    // Índice del recomendado visible y rotación automática cada 7s
    const [index, setIndex] = useState(0);

    // Reiniciamos al cambiar el conjunto de recomendaciones
    useEffect(() => {
        setIndex(0);
    }, [ordered.length]);

    // Intervalo de rotación cada 7s
    useEffect(() => {
        if (!ordered.length) return;
        const t = setInterval(() => {
            setIndex((i) => (i + 1) % ordered.length);
        }, 10000);
        return () => clearInterval(t);
    }, [ordered.length]);

    const current = ordered[index] || null;

    return (
        <div className="container-recomendaciones">
            <h2>Recomendaciones</h2>
            <div className="recomendado-viewport" aria-live="polite" aria-atomic="true">
                {current ? (
                    <div key={`${current[1].id}-${index}`} className="recomendado-slide">
                        <Recomendado
                            id={current[1].id}
                            titulo={current[0]}
                            autor={current[1].autor}
                            reseña={current[1].reseña}
                            categoria={current[1].categoria}
                            imagen={current[1].imagen}
                            rate={current[1].calificacion}
                            precio={current[1].precio}
                        />
                    </div>
                ) : (
                    <p>Sin recomendaciones</p>
                )}
            </div>
        </div>
    );
}

export default Recomendaciones;
