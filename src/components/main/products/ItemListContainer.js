import { ProductsExample } from "./productsExample";
import { useEffect, useState } from "react";
import { ItemList } from "./itemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const retrieveProducts = new Promise((conf, deni) => {
    setTimeout(function () {
      conf(ProductsExample);
    }, 2000);
  });

  useEffect(() => {
    retrieveProducts
      .then((conf) => setProducts(conf))
      .catch((error) => alert(error));
  }, []);

  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
