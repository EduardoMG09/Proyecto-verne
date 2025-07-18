// hooks/useCart.js
import { useContext } from 'react';
import { CartContext } from '../../src/context/Cart'; // Ajusta la ruta según tu estructura

export const useCart = () => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  
  return context;
};