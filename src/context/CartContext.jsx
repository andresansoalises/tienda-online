import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const agregarAlCarrito = (newProductCart) => {
    setCartList([...cartList, newProductCart]);
  };

  const borrarCarrito = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{ cartList, agregarAlCarrito, borrarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
