import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = (obj) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Link to={"/detail/${obj.id}"}>
        <Card.Img variant="top" src={obj.img} />
        <Card.Body>
          <Card.Title>{obj.nombre}</Card.Title>
          <Card.Text>${obj.precio}</Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Link>
    </Card>
  );
};
export default Item;
