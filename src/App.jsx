import './App.css'
import ListaTareas from './components/ListaTareas'
import Producto from './components/Producto'

function App() {

  return (
    <>
      <ListaTareas />

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
