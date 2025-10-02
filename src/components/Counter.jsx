import { useState, useEffect } from "react";
import CustomButton from "./CustomButton";

export default function Counter() {
  const [count, setCount] = useState(1);
  const min = 0;
  const max = 10;

  useEffect(() => {
    if (count === min) {
      alert("No se puede decrementar más");
    }
    if (count === max) {
      alert("No se puede incrementar más");
    }
  }, [count]); 

  return (
    <div className="counter-controls">
      <CustomButton
        onClick={() => setCount((c) => Math.max(min, c - 1))}
        btnText="Decrementar"
        variant="danger"
        size="small"
        disabled={count === min}
      />
      <p className="counter">El contador está en {count}</p>
      <CustomButton
        onClick={() => setCount((c) => Math.min(max, c + 1))}
        btnText="Incrementar"
        variant="primary"
        size="small"
        disabled={count === max}
      />
      <CustomButton
        onClick={() => setCount(1)}
        btnText="Resetear"
        variant="primary"
        size="small"
        disabled={count === 0}
      />
    </div>
  );
}