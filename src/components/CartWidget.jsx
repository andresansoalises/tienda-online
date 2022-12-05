import { BsCart2 } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";

function CartWidget() {
  return (
    <div>
      <BsCart2 />
      <Badge bg="secondary">0</Badge>
      
    </div>
  );
}

export default CartWidget;
