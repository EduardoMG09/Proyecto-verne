import React from "react";
import "../styles/Recomendado.css";
import { FaStar } from "react-icons/fa";

function Recomendado(props){
    const descripcion = props.reseña || props.descripcion || "";
    const raw = props.imagen || props.img || null;

    // Normaliza rutas: quita "public/", corrige barras y asegura prefijo '/'
    const normalizeUrl = (u) => {
        if (!u) return null;
        let path = String(u).replace(/\\/g, "/");
        if (path.toLowerCase().startsWith("public/")) {
            path = path.slice(7);
        }
        path = path.replace("/public/", "/");
        if (!/^https?:\/\//i.test(path) && !path.startsWith("/") && !path.startsWith("data:")) {
            path = "/" + path;
        }
        return path;
    };

    const bg = normalizeUrl(raw);
    const encoded = bg ? encodeURI(bg) : undefined;
    const bgCss = encoded ? `url("${encoded}")` : undefined;
    return(
        <div
            className={`container-recomendado ${bg ? 'has-bg' : ''}`}
            style={{
                backgroundImage: bgCss
            }}
        >
            <div>
                <h2>{props.titulo}</h2>
                <p><strong>Calificación:</strong> {props.rate} <FaStar  className="star-rec"/></p>
                {descripcion && <p>{descripcion}</p>}
            </div>
            <img src={encoded || props.imagen} alt={props.titulo} />
        </div>
    )
}

export default Recomendado;