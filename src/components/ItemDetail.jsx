import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetail = ({product}) => {  
  return <div>
    <Card style={{ width: "18rem" }}>
      <Link to={"/detail/${obj.id}"}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>${product.precio}</Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Link>
    </Card>
  </div>;
};

export default ItemDetail;
