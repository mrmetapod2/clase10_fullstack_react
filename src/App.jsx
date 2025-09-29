import './App.css'
import Producto from './components/Producto'
import TarjetaUsuario from './components/TarjetaUsuario'
import CustomButton from './components/CustomButton'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <TarjetaUsuario
      name="Juan Pérez" 
      email="juan@example.com" 
      age={28} 
      isOnline={false} 
      />
      <h2>Productos</h2>
      <Producto 
        name="Silla Gamer" 
        price={50000} 
        discount={10} 
        category="Muebles" 
      />
      <Producto 
        name="Mouse" 
        price={5000} 
        category="Accesorios" 
      />

      <Counter />

      <CustomButton 
        btnText="Guardar" 
        variant="primary"
        size="large"
        disabled={false}
        onClick={() => alert("Guardado")}
      />
    </>
  )
}

export default App
