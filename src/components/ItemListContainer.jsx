import { useEffect } from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { gFetch } from "../utils/gFetch";

function ItemListContainer(obj) {
  const [products, setProducts] = useState([]);


  gFetch.then((resp) => setProducts(resp));
  return (
    <div>
      {products.map((obj) => (
        <Card key={obj.id} style={{ width: "18rem" }}>
          <Link to={"/detail/${obj.id}"}>
            <Card.Img variant="top" src={obj.img} />
            <Card.Body>
              <Card.Title>{obj.nombre}</Card.Title>
              <Card.Text>${obj.precio}</Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default ItemListContainer;
