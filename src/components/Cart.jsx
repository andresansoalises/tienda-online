import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { cartList,borrarCarrito } = useCartContext();
  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartList.map((product) => (
          <li key={product.id}>
            <img src={product.img}/>
            {product.nombre} {product.cantidad}
          </li>
        ))}
      </ul>
      <button onClick={borrarCarrito}>Vaciar carrito</button>
    </div>
  );
};
export default Cart;
