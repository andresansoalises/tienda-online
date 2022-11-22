import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contador from "./Contador";

const ItemDetail = ({ product }) => {
  const onAdd=(cantidad)=>{console.log(cantidad)}
  return (
    <div>
    <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>${product.precio}</Card.Text>
        </Card.Body>
    </Card>
    <Contador stock={10} initial={1} onAdd={onAdd}/>
    </div>
  );
};

export default ItemDetail;
