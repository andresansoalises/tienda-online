import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../utils/gFetch";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryCollection = doc(dbFirestore, "Items", productId);
    getDoc(queryCollection)
      .then((doc) => setProduct({ id: doc.id, ...doc.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? <h2>Cargando...</h2> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;