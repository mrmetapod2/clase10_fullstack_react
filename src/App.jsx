import './App.css'
import ListaTareas from './components/ListaTareas'
import Producto from './components/Producto'
import TarjetaUsuario from './components/TarjetaUsuario'

function App() {

  return (
    <>
      <ListaTareas />
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
    </>
  )
}

export default App
