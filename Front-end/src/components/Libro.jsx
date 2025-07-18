import React from "react";
import "../styles/Libreria.css";
import { useCart } from "../hooks/useCart";

function Libro(props){
    const { addToCart, isInCart, getItemQuantity } = useCart();

    const handleAddToCart = () => {
        // Validar que todos los datos necesarios estén presentes
        if (!props.id || !props.titulo || !props.precio) {
            console.error("Faltan datos del producto:", props);
            return;
        }

        const producto = {
            id: props.id,
            titulo: props.titulo,
            precio: props.precio,
            rate: props.rate || 0, // Valor por defecto si no existe
            img: props.img || '' // Valor por defecto si no existe
        };

        console.log("Agregando producto al carrito:", producto);
        addToCart(producto);
    };

    return(
        <div className="container-libro">
            <div className="imagen-libro">
                <div className="libro">
                    <figure>
                        <img className="portada-libro" src={props.img} alt=""/>
                    </figure>
                </div>
            </div>
            <div className="titulo-libro">
                {props.titulo}
            </div>
            <div className="calificacion-libro">
                Calificación: {props.rate}
            </div>
            <div className="precio-libro">
                $ {props.precio}.00
            </div>
            <div className="btn-agregar">
                <button 
                className="btn-agregar-carrito" 
                onClick={handleAddToCart}>
                    {isInCart(props.id)
                    ? `Agregar más (${getItemQuantity(props.id)} en carrito)` 
                    : "Agregar al carrito"
                    }
                </button>
            </div>
        </div>
    )
}

export default Libro;