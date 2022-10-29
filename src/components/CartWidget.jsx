import cart from "../assets/cart.jpg";

function CartWidget() {
  return (
    <div>
      <img
        src={cart}
        width="55"
        height="40"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </div>
  );
}

export default CartWidget;
