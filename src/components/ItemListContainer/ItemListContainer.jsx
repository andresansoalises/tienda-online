import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList";


import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = (obj) => {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryCollection = collection(dbFirestore, "Items");

    let queryFilter = categoriaId
      ? query(queryCollection, where("categoria", "==", categoriaId))
      : queryCollection;

    getDocs(queryFilter)
      .then((resp) =>
        setProducts(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    /*.then((doc) => setProducts({ id: doc.id, ...doc.data() }));*/
  }, [categoriaId]);

  return loading ? (
    <h2> Cargando...</h2>
  ) : (
    <div className="flex0">
      <div className="flex1">
        <h2 className="titulo">PRODUCTOS DESTACADOS</h2>
      </div>
      <div className="flex2">
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
