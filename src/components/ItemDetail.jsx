import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { productId } = useParams();
  console.log(productId);
  return <div>ItemDetail</div>;
};

export default ItemDetail;
