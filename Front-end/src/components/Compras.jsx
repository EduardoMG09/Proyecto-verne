import React from "react";
import "../styles/Carrito.css";
import { useCart } from "../hooks/useCart";

function Compras(){
    const { 
        cart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        getTotalItems, 
        getTotalPrice 
    } = useCart();

    // Función para manejar el cambio de cantidad
    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            updateQuantity(productId, newQuantity);
        }
    };

    // Función para incrementar cantidad
    const incrementQuantity = (productId, currentQuantity) => {
        updateQuantity(productId, currentQuantity + 1);
    };

    // Función para decrementar cantidad
    const decrementQuantity = (productId, currentQuantity) => {
        if (currentQuantity > 1) {
            updateQuantity(productId, currentQuantity - 1);
        } else {
            removeFromCart(productId);
        }
    };

    // Si el carrito está vacío
    if (cart.length === 0) {
        return (
            <div className="contenedor-compras">
                <div className="contenedor-compras-2">
                    <div className="carrito-vacio">
                        <h2>Tu carrito está vacío</h2>
                        <p>Agrega algunos libros para comenzar tu compra</p>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <div className="contenedor-compras">
            <div className="contenedor-compras-2">
                <div className="tabla-productos">
                    <table>
                        <thead>
                            <tr>
                                <th className="tabla-imagen">Libro</th>
                                <th className="tabla-titulo-libro">Titulo</th>
                                <th className="tabla-stock-libro">Cantidad</th>
                                <th className="tabla-precio-libro">Precio</th>
                                <th className="tabla-acciones">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((libro) => (
                                <tr key={libro.id}>
                                    <td className="celda-imagen">
                                        <figure className="libro-imagen-carrito">
                                            <img
                                                src={libro.img} 
                                                alt={libro.titulo}
                                                className="imagen-libro-carrito"
                                            />
                                        </figure>
                                    </td>
                                    <td className="celda-titulo">
                                        <div className="info-libro">
                                            <h4>{libro.titulo}</h4>
                                            <p className="calificacion">
                                                Calificación: {libro.rate}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="celda-cantidad">
                                        <div className="controles-cantidad">
                                            <button 
                                                className="btn-cantidad"
                                                onClick={() => decrementQuantity(libro.id, libro.quantity)}
                                            >
                                                -
                                            </button>
                                            <span className="cantidad-actual">
                                                {libro.quantity}
                                            </span>
                                            <button 
                                                className="btn-cantidad"
                                                onClick={() => incrementQuantity(libro.id, libro.quantity)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="celda-precio">
                                        <div className="precio-info">
                                            <span className="precio-unitario">
                                                ${libro.precio}.00 c/u
                                            </span>
                                            <span className="precio-total">
                                                ${(libro.precio * libro.quantity)}.00
                                            </span>
                                        </div>
                                    </td>
                                    <td className="celda-acciones">
                                        <button 
                                            className="btn-eliminar"
                                            onClick={() => removeFromCart(libro.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <div className="resumen-compra">
                    <h3>Resumen de Compra</h3>
                    <div className="resumen-detalle">
                        <div className="resumen-linea">
                            <span>Total de libros:</span>
                            <span>{getTotalItems()} items</span>
                        </div>
                        <div className="resumen-linea">
                            <span>Subtotal:</span>
                            <span>${getTotalPrice()}.00</span>
                        </div>
                        <div className="resumen-linea">
                            <span>Impuestos (16%):</span>
                            <span>${Math.round(getTotalPrice() * 0.16)}.00</span>
                        </div>
                        <div className="resumen-linea total">
                            <span>Total:</span>
                            <span>${Math.round(getTotalPrice() * 1.16)}.00</span>
                        </div>
                    </div>
                    <div className="botones-compra">
                        <button 
                            className="btn-vaciar-carrito"
                            onClick={clearCart}
                        >
                            Vaciar Carrito
                        </button>
                        <button 
                            className="btn-proceder-pago"
                            onClick={() => {
                                // Aquí puedes agregar la lógica para proceder al pago
                                alert('Procediendo al pago...');
                            }}
                        >
                            Proceder al Pago
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compras;