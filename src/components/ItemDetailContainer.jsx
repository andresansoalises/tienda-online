import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gFetch } from "../utils/gFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    gFetch(productId).then((resp) => setProduct(resp));
  }, []);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
