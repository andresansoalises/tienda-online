import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import Contador from "./Contador";

const ItemDetail = ({ product }) => {
  const [isCounter, setIsCounter] = useState(true);
  const { cartList, agregarAlCarrito } = useCartContext();
  const onAdd = (cantidad) => {
    agregarAlCarrito({ ...product, cantidad });
    setIsCounter(false);
  };
  console.log(cartList);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>${product.precio}</Card.Text>
        </Card.Body>
      </Card>
      {isCounter ? (
        <Contador stock={10} initial={1} onAdd={onAdd} />
      ) : (
        <div>
          <Link to="/carrito" className="btn btn-success">
            Terminar mi compra
          </Link>
          <Link to="/home" className="btn btn-success">
            Seguir comprando
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
