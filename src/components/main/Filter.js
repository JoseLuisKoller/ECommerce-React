import React from "react";
import { Container, Form } from "react-bootstrap";

function Filters() {
  return (
    <aside>
      <h5>Filtrar por..</h5>
      <Container>
        <Form>
          <Form.Group id="categorie"></Form.Group>
          <Form.Group id="anime"></Form.Group>
          <Form.Group id="price"></Form.Group>
        </Form>
      </Container>
    </aside>
  );
}

export default Filters;
