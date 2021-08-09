import React from "react";
import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import eren from "./shingeki.jpg";

function Shelf() {
  const [count, setCount] = useState(0);
  const [producto, setProducto] = useState({
    name: "Eren",
    stock: 4,
    type: "Accesorio",
    price: 300,
    description: "Poster de la batalla de Eren contra el Titan Acorazado.",
    img: eren,
  });

  function onAdd() {
    if (producto.stock >= count && count > 0) {
      producto.stock = producto.stock - count;
    }
  }

  function onUp() {
    if (count + 1 <= producto.stock) {
      setCount(count + 1);
    }
  }

  function onDown() {
    if (count - 1 >= 0) {
      setCount(count - 1);
    }
  }

  return (
    <section>
      <h2>Los mas vendidos</h2>
      <Card>
        <Card.Header as="h4" className="px-2">
          {producto.name}
        </Card.Header>
        <Card.Subtitle className="text-muted px-3">
          {producto.type}
        </Card.Subtitle>
        <Card.Body className="d-flex flex-column">
          <Card.Img src={producto.img} />
          <Card.Text>{producto.description}</Card.Text>
          <Container className="d-flex flex-row align-items-center text-start p-2">
            <Button
              style={{ width: "40px", height: "auto" }}
              className="m-1"
              variant="secondary"
              onClick={() => onDown()}
            >
              -
            </Button>
            <Button
              style={{ width: "40px", height: "auto" }}
              className="m-1"
              onClick={() => onUp()}
            >
              +
            </Button>

            <h4 className="m-auto">{count}</h4>
          </Container>
          <Container className="d-flex flex-row justify-content-evenly align-items-center">
            <span>Precio: ${producto.price}</span>
            <Button variant="outline-primary" onClick={() => onAdd()}>
              Agregar al carrito
            </Button>
          </Container>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Shelf;
