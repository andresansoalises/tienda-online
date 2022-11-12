import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { gFetch } from "../utils/gFetch";

function ItemListContainer(obj) {
  const [products, setProducts] = useState([]);
  gFetch.then((resp) => setProducts(resp));
  return (
    <div>
      {products.map (obj => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={obj.img} />
            <Card.Body>
              <Card.Title>{obj.nombre}</Card.Title>
              <Card.Text>${obj.precio}</Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      ))}
    </div>
  );
}

export default ItemListContainer;
