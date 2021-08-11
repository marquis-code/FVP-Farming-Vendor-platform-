import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    return (
        <StoreContext.Provider value={[cart, setCart]}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
