import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { gFetch } from "../../utils/gFetch";
import ItemList from "../ItemList";
import ItemDetail from "../ItemDetail";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore";

const ItemListContainer = (obj) => {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryCollection = collection(dbFirestore, "Items");
    if (categoriaId) {
      const queryCollection = collection(dbFirestore, "Items");
      let queryFilter = query(
        queryCollection,
        where("categoria", "==", categoriaId)
      );

      getDocs(queryFilter)
        .then((resp) =>
          setProducts(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
        .then((doc) => setProduct({ id: doc.id, ...doc.data() }));
    } else {
      getDocs(queryCollection)
        .then((resp) => setProducts(resp.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
        .then((doc) => setProduct({ id: doc.id, ...doc.data() }));
    }
  }, [categoriaId]);

  /*useEffect(() => {
    if (categoriaId) {
      gFetch()
        .then((resp) =>
          setProducts(resp.filter((prod) => prod.categoria === categoriaId))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch()
        .then((resp) => setProducts(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoriaId]);*/

  return loading ? (
    <h2> Cargando...</h2>
  ) : (
    <div className="grid">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
