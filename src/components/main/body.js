import React from "react";
import Shelf from "./ItemListContainer";
import { Container } from "react-bootstrap";
import Filters from "./Filter";
function Main() {
  return (
    <main>
      <Container className="m-0">
        <h1>Trost abrio sus puertas a todos...</h1>
        <p>
          La puerta de la muralla se levanto para que todos puedan adquirir
          productos relacionado al anime que mas te guste.
        </p>
      </Container>
      <Container className="row">
        <Container className="col-3 border rounded">
          <Filters />
        </Container>
        <Container className="col">
          <Shelf />
        </Container>
      </Container>
    </main>
  );
}

export default Main;
