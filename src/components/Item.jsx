import { Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }} className="box">
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>${product.precio}</Card.Text>
        </Card.Body>
    </Card>
  );
};
export default Item;
