import "../MisComponentes.css";
export default function TarjetaUsuario() {
    const [tareas, setTareas] = useState([])
    const [nuevaTarea, setNuevaTarea] = useState("")
    const agregarTarea = ()=>{
        if(nuevaTarea.trim() === "") return
        const tarea = {
            texto:nuevaTarea,
            completada:false,
            fecha:null
        }
        console.log(tarea)
        setTareas([...tareas,tarea])
        setNuevaTarea("")
    }

    const toggleCompletada = (index) =>{
        const nuevasTareas = [...tareas]
        nuevasTareas[index].completada = !nuevasTareas[index].completada //true -> false
        nuevasTareas[index].fecha = nuevasTareas[index].completada ? new Date().toLocaleDateString() : null
        setNuevaTarea(nuevasTareas) 
    }
  return (
    <div className="lista-tareas">
      <h2>Lista de Tareas</h2>
      <div className="formulario">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe una tarea..."
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      <ul>
        {
            tareas.map((tarea, index)=>(
                <li key={index} className={tarea.completada ? "completada":""}>
                    <input 
                    type = "checkbox" 
                    checked = {tarea.completada}
                    onChange = {()=>toggleCompletada(index)}
                    />
                    {tarea.texto}
                    {tarea.completada && <span className="fecha">{tarea.fecha}</span>}
                </li>
            ))}
      </ul>
           <style></style>
    </div>
  )
}
