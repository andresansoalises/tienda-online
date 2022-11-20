import { useEffect } from "react";
import { useState } from "react";

import { gFetch } from "../utils/gFetch";
import ItemList from "./ItemList";

function ItemListContainer(obj) {
  const [products, setProducts] = useState([]);


  gFetch.then((obj) => setProducts(obj));
  return (
    <div>
<ItemList products={products}/>
    </div>
  );
}

export default ItemListContainer;
