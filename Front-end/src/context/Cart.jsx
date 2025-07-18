// Cart.jsx - Actualizado para tu estructura
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error al cargar carrito desde localStorage:", error);
        setCart([]);
      }
    }
  }, []);

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Función para agregar producto al carrito
  const addToCart = (product) => {
    if (!product || !product.id) {
      console.error("Producto inválido:", product);
      return;
    }

    const index = cart.findIndex(item => item.id === product.id);
    if (index >= 0) {
      // Si el producto ya existe, incrementar cantidad
      const newCart = structuredClone(cart);
      newCart[index].quantity += 1;
      setCart(newCart);
    } else {
      // Si es nuevo, agregarlo con cantidad 1
      setCart(prev => [...prev, { ...product, quantity: 1 }]);
    }
  };

  // Función para eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  // Función para actualizar cantidad de un producto
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prev => prev.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  // Función para obtener la cantidad total de productos
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Función para obtener el precio total
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.precio * item.quantity), 0);
  };

  // Función para limpiar el carrito
  const clearCart = () => setCart([]);

  // Función para verificar si un producto está en el carrito
  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  // Función para obtener la cantidad de un producto específico
  const getItemQuantity = (productId) => {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider value={{ 
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice,
      isInCart,
      getItemQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};