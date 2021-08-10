import { Card, Container } from "react-bootstrap";
export const Item = ({ product }) => {
  return (
    <Card className="m-2">
      <Card.Header as="h4" className="px-2">
        {product.name}
      </Card.Header>
      <Card.Subtitle className="text-muted px-3">{product.type}</Card.Subtitle>
      <Card.Body className="d-flex flex-column">
        <Card.Img src={product.img} />
        <Card.Text>{product.description}</Card.Text>
        <Container className="d-flex flex-row align-items-center text-start p-2">
          <h4 className="m-auto">{product.price}</h4>
        </Container>
      </Card.Body>
    </Card>
  );
};
