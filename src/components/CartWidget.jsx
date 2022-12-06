import { BsCart2 } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import { useCartContext } from "../context/CartContext";

function CartWidget() {
  const {productoTotal}=useCartContext()
  return (
    <div>
      <BsCart2 />
      <Badge bg="secondary">{productoTotal()}</Badge>
    </div>
  );
}

export default CartWidget;
