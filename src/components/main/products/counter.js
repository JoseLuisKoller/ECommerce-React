import { useState } from "react";
import { Button, Container } from "react-bootstrap";

export function CountItems({ stock, start, onAdd }) {
  const [count, setCount] = useState(start);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > start) {
      setCount(count - 1);
    }
  };

  return (
    <Container className="packageCounter">
      <Container className="counter">
        <Container className="buttons">
          <Button onClick={increment}> - </Button>
          <Button onClick={decrement}> + </Button>
          <h4>Unidades: {count}</h4>
        </Container>
        <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
      </Container>
    </Container>
  );
}

export default item;
