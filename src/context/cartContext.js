import React  from "react";
const { createContext, useState } = require("react");

export const cartContext = createContext([]);

export const Provider= ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) =>{
        const exit = cart.some(i => i.ID === item.ID);
        if(exit === false){
            setCart([...cart, item]);
        }
        
    }
    
    const removeToCart = (item) => {
        const newCart = cart.filter((i) => i.ID !== item)
        setCart(newCart);
    }
    
    const total = cart.length;
    return (
        <cartContext.Provider value={{ 
            cart,
            addToCart,
            removeToCart,
            total
        }}
        >
            {children}
        </cartContext.Provider>
    )
}