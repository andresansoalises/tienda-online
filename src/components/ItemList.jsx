import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((obj) => (obj) => <Item key={obj.id} obj={obj} />)}
    </div>
  );
};

export default ItemList;
