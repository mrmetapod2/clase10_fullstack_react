import "../MisComponentes.css";
export default function TarjetaUsuario({ name, email, age, isOnline }) {
    //codigo funcioal del componente aca
  return (
    <>    
    <div className="user-card">
      <h2 className="user-header">Tarjeta de usuario</h2>
      <div className="user-header">
        
        <h4>{name}</h4>
        <h4>Email: {email}</h4>
        <h4>Edad: {age}</h4>
        <h4 className={isOnline ? "online" : "offline"}>Estado: {isOnline ? "En línea" : "Desconectado"}</h4>

      </div>
      <ul>
        
      </ul>
           
    </div>
    </>

  )
}
