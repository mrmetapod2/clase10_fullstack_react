import { useState } from 'react'
import CustomButton from './CustomButton';

export default function Counter() {
      const [count, setCount] = useState(0)
  return (
    <div>
      <CustomButton onClick={() => count > 0 ? setCount((count) => count - 1) : alert("No se puede decrementar más")} 
      btnText="Decrementar" 
      variant="danger" 
      size="small" 
      disabled={false}/>
      <p>El contador está en {count}</p>
      <CustomButton onClick={() => count < 10 ? setCount((count) => count + 1) : alert("No se puede incrementar más")} 
      btnText="Incrementar" 
      variant="primary" 
      size="small" 
      disabled={false}/>
    </div>
  );
}
