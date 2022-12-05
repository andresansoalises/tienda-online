import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../utils/gFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading,setLoading]=useState(true)
  const { productId } = useParams();
  useEffect(() => {
      gFetch(productId).then((resp) => setProduct(resp))
      .finally(()=>setLoading(false));
    }, []);


  return (
    <div>
      {loading? <h2>Cargando...</h2>:
      <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
