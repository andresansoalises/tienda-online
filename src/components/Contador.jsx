import { useState } from "react";

const Contador = ({ initial = 1, stock = 100, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);
  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const addCantidad = () => {
    onAdd(cantidad);
  };

  return (
    <div>
      <button onClick={sumar}>+</button>
      <label>{cantidad}</label>
      <button onClick={restar}>-</button>
      <div className="agregar">
      <button onClick={addCantidad}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Contador;
