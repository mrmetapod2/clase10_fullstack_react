import { useState } from "react";
import "./componentesHook.css"; 

export default function ListaTareas() {

const tareasIniciales = [
{ id: 1, texto: "Aprender React", estado: "completada" },
{ id: 2, texto: "Practicar hooks", estado: "en progreso" },
{ id: 3, texto: "Crear proyecto final", estado: "pendiente" },
];

const [tareas, setTareas] = useState(tareasIniciales);
const [nuevaTarea, setNuevaTarea] = useState("");

const agregarTarea = () => {
if (nuevaTarea.trim() === "") return;
const tarea = {
id: Date.now(),
texto: nuevaTarea,
estado: "pendiente",
};
setTareas([...tareas, tarea]);
setNuevaTarea("");
};

const cambiarEstado = (index) => {
const nuevasTareas = [...tareas];
nuevasTareas[index].estado =
nuevasTareas[index].estado === "pendiente"
? "en progreso"
: nuevasTareas[index].estado === "en progreso"
? "completada"
: "pendiente";
setTareas(nuevasTareas);
};

const getColor = (estado) =>
estado === "completada" ? "green" : estado === "en progreso" ? "orange" : "gray";

const getIcono = (estado) =>
estado === "completada" ? "✓" : estado === "en progreso" ? "⏳" : "⏱️";

const estadisticas =
tareas.length > 0 && {
completadas: tareas.filter((t) => t.estado === "completada").length,
enProgreso: tareas.filter((t) => t.estado === "en progreso").length,
pendientes: tareas.filter((t) => t.estado === "pendiente").length,
};

return ( <div className="counter"> <h2>Lista de Tareas</h2>

```
  <div className="counter-controls">
    <input
      type="text"
      value={nuevaTarea}
      onChange={(e) => setNuevaTarea(e.target.value)}
      placeholder="Escribe una tarea..."
    />
    <button onClick={agregarTarea}>Agregar</button>
  </div>

  {tareas.length === 0 ? (
    <p>No hay tareas pendientes</p>
  ) : (
    <ul>
      {tareas.map((tarea, index) => (
        <li
          key={tarea.id}
          style={{ color: getColor(tarea.estado), cursor: "pointer" }}
          onClick={() => cambiarEstado(index)}
        >
          {getIcono(tarea.estado)} {tarea.texto}
        </li>
      ))}
    </ul>
  )}

  {tareas.length > 0 && (
    <div className="estadisticas">
      <p>Completadas: {estadisticas.completadas}</p>
      <p>En progreso: {estadisticas.enProgreso}</p>
      <p>Pendientes: {estadisticas.pendientes}</p>
    </div>
  )}
</div>


);
}
