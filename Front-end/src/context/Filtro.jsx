import React, { createContext, useState } from "react";

export const FiltrosContext = createContext();

export function FiltrosProvider({ children }) {
    const [precioMaximo, setPrecioMaximo] = useState(1040);
    // Calificación mínima requerida para mostrar libros
    const [calificacionMinima, setCalificacionMinima] = useState(0);

    return (
        <FiltrosContext.Provider value={{
            precioMaximo,
            setPrecioMaximo,
            calificacionMinima,
            setCalificacionMinima
        }}>
            {children}
        </FiltrosContext.Provider>
    );
}
