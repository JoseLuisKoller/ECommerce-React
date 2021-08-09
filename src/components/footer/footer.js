import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">
            <h5>Newsletter</h5>
            <p>Registrate para tener todas nuestras noticias</p>
          </Col>
          <Col className="text-center">
            <h5>Redes Sociales</h5>
            <p>Todas nuestras redes sociales</p>
          </Col>
          <Col className="text-center">
            <h5>Contacto</h5>
            <p>Nuestra Localidad</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
