
import Producto from './components/Producto'
import UserCard from './components/UserCard'
import CustomButton from './components/CustomButton'
import Counter from './components/Counter'
import ListaTareas from './components/ListaTareas'
import Auth from './components/Auth'
function App() {

  const usuarioEjemploAdmin = {
    nombre: 'Ana García',
    email: 'ana@ejemplo.com',
    rol: 'admin',
    ultimoAcceso: '15/01/2024'
  };

  const usuarioEjemploEditor = {
    nombre: 'Jose Benavidez',
    email: 'jose@ejemplo.com',
    rol: 'editor',
    ultimoAcceso: '15/01/2024'
  };

  const usuarioEjemploUsuario = {
    nombre: 'carlos roca',
    email: 'carlos@ejemplo.com',
    rol: 'usuario',
    ultimoAcceso: '15/01/2020'
  };

  return (
    <>

      {/**<Counter/> */}
      <ListaTareas />
      <Auth usuario={usuarioEjemploAdmin} />

    </>
  )
}

export default App
