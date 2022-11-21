import { useEffect } from "react";
import { useState } from "react";

import { gFetch } from "../utils/gFetch";
import ItemList from "./ItemList";

const ItemListContainer = (obj)=> {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
  gFetch("1")
 .then(resp => setProducts(resp))
 .catch (err=> console.log(err))
 .finally(()=>setLoading(false))
},[])

  return (

    loading
     ?  
     <h2> Cargando...</h2>:
<div><ItemList products={products}/></div>
  )
}

export default ItemListContainer;
