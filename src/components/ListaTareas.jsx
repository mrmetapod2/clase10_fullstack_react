import { useState } from "react";

export default function ListaTareas() {
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
           <style>{`
        .lista-tareas {
          max-width: 400px;
          margin: 2rem auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-family: sans-serif;
        }
        .formulario {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        input[type="text"] {
          flex: 1;
          padding: 0.5rem;
          border: 1px solid #aaa;
          border-radius: 4px;
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid #eee;
        }
        .completada {
          text-decoration: line-through;
          color: gray;
        }
        .fecha {
          margin-left: auto;
          font-size: 0.8rem;
          color: green;
        }
      `}</style>
    </div>
  )
}
