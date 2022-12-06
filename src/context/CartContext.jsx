import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const isInCart=(id)=>cartList.findIndex(producto=>producto.id===id)
  
  
  const agregarAlCarrito = (newProductCart) => {
    let index =isInCart(newProductCart.id)
    if (index===-1){  
      setCartList([...cartList, newProductCart]);
    }else{
      cartList[index].cantidad+=newProductCart.cantidad
      setCartList([...cantidad])

    }
  };

  const borrarCarrito = () => {
    setCartList([]);
  };

  const productoTotal = () => {
    return cartList.reduce(
      (count, producto) => (count += producto.cantidad),
      0
    );
  };

  const precioTotal = () => {
    return cartList.reduce(
      (sumPrecio, producto) =>
        (sumPrecio += producto.cantidad * producto.precio),
      0
    );
  };

  const eliminarProducto = (id) => {
    setCartList(cartList.filter((producto) => producto.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarAlCarrito,
        borrarCarrito,
        productoTotal,
        precioTotal,
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
