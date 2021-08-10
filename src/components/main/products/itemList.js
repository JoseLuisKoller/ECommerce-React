import { Container } from "react-bootstrap";
import { Item } from "./item";

export const ItemList = ({ products }) => {
  return (
    <Container className="productList">
      {products.map((product) => (
        <Item key={product.key} product={product} />
      ))}
    </Container>
  );
};
