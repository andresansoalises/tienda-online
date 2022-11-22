import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { gFetch } from "../../utils/gFetch";
import ItemList from "../ItemList";
import ItemDetail from "../ItemDetail";

const ItemListContainer = (obj) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();
  useEffect(() => {
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
  }, [categoriaId]);

  return loading ? (
    <h2> Cargando...</h2>
  ) : (
    <div className="grid">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
