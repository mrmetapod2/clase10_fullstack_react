import './App.css'
import ListaTareas from './components/ListaTareas'
import Producto from './components/Producto'
import CustomButton from './components/CustomButton'

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
