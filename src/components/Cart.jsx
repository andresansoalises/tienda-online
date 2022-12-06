import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";

const Cart = () => {
  const [dataForm, setDataForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const { cartList, borrarCarrito, precioTotal, eliminarProducto } =
    useCartContext();

  const generarOrden = (evt) => {
    evt.preventDefault();
    let orden = {};
    orden.buyer = dataForm;
    orden.total = precioTotal();
    orden.items = cartList.map((product) => ({
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
    }));
    console.log(orden);

    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, orden)
      .then((resp) => console.log(resp))
      .finally(() => {
        setDataForm({
          nombre: "",
          telefono: "",
          email: "",
        });
        borrarCarrito();
      });
  };
  const handOnChange = (evt) => {
    console.log("nombre input:", evt.target.nombre);
    console.log("valor del input:", evt.target.value);
    setDataForm({
      ...dataForm,
      [evt.target.nombre]: evt.target.value,
    });
  };
  
  console.log(dataForm);

  return (
    <div>
      <h1>Carrito</h1>
      {cartList.length !== 0 ? (
        <>
          <ul>
            {cartList.map((product) => (
              <li key={product.id}>
                <img src={product.img} />
                <button onClick={() => eliminarProducto(product.id)}>X</button>
                {product.nombre} {product.cantidad}
              </li>
            ))}
          </ul>
          <h2>{precioTotal() !== 0 && precioTotal()}</h2>
          <button onClick={borrarCarrito}>Vaciar carrito</button>
          <form onSubmit={generarOrden}>
            <input
              type="text"
              name="nombre"
              onChange={handOnChange}
              value={dataForm.nombre}
              placeholder="Ingrese nombre"
            />
            <input
              type="text"
              name="email"
              onChange={handOnChange}
              placeholder="Ingrese email"
            />
            <input
              type="text"
              name="Repetir email"
              onChange={handOnChange}
              placeholder="Repetir email"
            />

            <input
              type="text"
              name="teléfono"
              onChange={handOnChange}
              value={dataForm.telefono}
              placeholder="Ingrese teléfono"
            />

            <button onClick={generarOrden()}>Generar Orden</button>
          </form>
        </>
      ) : (
        <h2>
          No hay productos en el carrito<Link to="/">Ir a comprar</Link>
        </h2>
      )}
    </div>
  );
};
export default Cart;
