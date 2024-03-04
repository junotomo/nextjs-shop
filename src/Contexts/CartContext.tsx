import { ReactNode, createContext, useState } from "react";

export const CartContext = createContext({})

export const CartContextProvider = ({children}: {children: React.ReactNode}) => {
    const [id, setId] = useState<string>('')

    return (
        <CartContext.Provider
            value={{id,setId}}
        >
            {children}
        </CartContext.Provider>
    )
}
