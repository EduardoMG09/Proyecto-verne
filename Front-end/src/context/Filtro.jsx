import React, { createContext, useState } from "react";

export const FiltrosContext = createContext();

export function FiltrosProvider({ children }) {
    const [precioMaximo, setPrecioMaximo] = useState(1040);

    return (
        <FiltrosContext.Provider value={{ precioMaximo, setPrecioMaximo }}>
            {children}
        </FiltrosContext.Provider>
    );
}
