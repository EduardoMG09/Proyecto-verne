import React from "react";
import "../styles/Verificar.css";
import array from "../json/paises/estados.json";
import { useCart } from "../hooks/useCart";

function Checkout(){
    
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


    return (
        <div className="checkout-container">
            <div className="contenedor-checkout-formulario">
                <form action="" className="checkout">
                    <h2>Verificar</h2>
                    <div className="email-items-checkout">
                            <label htmlFor="email" name="email" className="email-label-checkout">
                            <h3>Correo electrónico:</h3>
                            </label>
                        
                        <label htmlFor="email" name="email" className="email-ad-label-checkout">
                            Usaremos los datos de tu cuenta para enviarte los detalles de tu compra
                        </label>
                        <input type="email" id="email" name="email" className="email-input-checkout" placeholder="Email" required />
                    </div>
                    
                     <div className="billing-address-checkout">
                        <label name="bill" className="bill-label-checkout">
                        <h2>Billing address</h2>
                        </label>
                        <label className="email-address-label-checkout">
                            Ingresa los datos de tu cuenta bancaria.
                        </label>
                        <div className="full-name">
                            <input type="text" name="Nombre(s)" className="nombre-input nombre-checkout" placeholder="Nombre(s)" required/>
                            
                            <input type="text" className="apellidos-input" name="Apellidos(s)" placeholder="Apellido(s)" required/>
                        </div>
                        <div className="numero-tarjeta">
                            <input 
                            type="text"
                            maxLength="19"
                            minLength="19"
                            name="numero-tarjeta" 
                            onInput={(e) => {
                                let value = e.target.value.replace(/\D/g, '').slice(0, 16);
                                value = value.match(/.{1,4}/g)?.join(' ') || '';
                                e.target.value = value;
                            }}
                            className="tarjeta-input" 
                            placeholder="1234 5678 9012 3456" required/>
                        </div>
                        
                        <div className="datos-tarjeta">
                            <input 
                            type="text" 
                            maxLength="3"
                            minLength="3" 
                            pattern="\d{3}"
                            onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')} 
                            className="cvc-input" placeholder="CVC" name="cvc" required />
                            
                            <input type="text" 
                            maxLength="5"
                            minLength="5"
                            className="date-input"
                            placeholder="MM/YY"
                            onInput={(e) => {
                                let value = e.target.value.replace(/\D/g, '');
                                if (value.length >= 3) {
                                value = value.slice(0, 2) + '/' + value.slice(2, 4);
                                }
                                e.target.value = value;
                            }}    
                            name="date" required />
                        
                        </div>
                    
                        <div className="pais">
                            <select type="text" className="pais-input" name="pais" id="" placeholder="País/Region" required>
                            <option value="">Selecciona tu país</option>
                            {
                                array.paises.map((pais, index) => (
                                <option key={index} value={pais.code}>
                                    {pais.name}
                                </option>
                                ))
                            }
                            </select>
                        </div>
                        
                        <div className="direccion">
                            <input type="text" className="direccion-input" name="Dirección" id="" placeholder="Dirección" required/>
                        </div>
                    </div>
                    <div className="ciudad-estado">
                        <input type="text" className="delegacion-input" placeholder="Delegación/Municipio" name="delegacion" required />
                        <input type="text" className="estado-input" placeholder="Estado/Ciudad" name="Estado" required />
                    
                    </div>
                    
                    <div className="postcode-number">
                        <input type="number" className="codigo-postal" placeholder="Codigo postal" name="codigo-postal" required />
                        <input type="tel" className="telefono" placeholder="Telefono" name="telefono"  required/>
                    
                    </div>
                    <div className="btn-submit-checkout">
                        <button className="submit-checkout" type="submit">Confirmar información</button>
                    </div>
                </form>
            </div>
            <div className="resumen-compra-2">
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
                            className="btn-proceder-pago"
                            onClick={() => {
                                // Aquí puedes agregar la lógica para proceder al pago
                                alert('Procediendo al pago...');
                            }}
                        >
                            Pagar
                        </button>
                    </div>
            </div>
        </div>
    )
}
export default Checkout;