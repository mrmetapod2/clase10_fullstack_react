import React, { useState } from 'react'

function Auth() {
    const [loading, setLoading] = useState(false);
    const [logueado, setlogueado] = useState(false);

    const usuarioEjemplo = {
        nombre: 'Ana García',
        email: 'ana@ejemplo.com',
        rol: 'admin',
        ultimoAcceso: '15/01/2024'
    };
    /*
     */

    return (
        <div>
            {loading ?
                (
                    <div>
                        <p>Cargando...</p>
                    </div>
                )
                :
                (
                    logueado ?
                        (<div>
                            <div>
                                <h2>Informacion personal</h2>
                                <p>Nombre: {usuarioEjemplo.nombre}</p>
                                <p>Email: {usuarioEjemplo.email}</p>
                                <p>Rol: {usuarioEjemplo.rol}</p>
                                <p>Ultimo acceso: {usuarioEjemplo.ultimoAcceso}</p>
                            </div>
                            <div>
                                <h2>Botones segun rol</h2>
                                {(usuarioEjemplo.rol === "admin" || usuarioEjemplo.rol === "editor") ?
                                    (
                                        <div>
                                            <button>Gestionar contenido</button>
                                            {usuarioEjemplo.rol === "admin" ?
                                                (<div>
                                                    <button>Panel de Administración</button>
                                                </div>) :
                                                (<div></div>)
                                            }
                                        </div>
                                    )
                                    :
                                    (
                                        <div></div>
                                    )
                                }
                                <button>Mi perfil</button>
                                <button>Configuracion</button>
                                <button onClick={() => setlogueado(false)}>Cerrar Sesion</button>

                            </div>
                        </div>)
                        :
                        (<form onSubmit={() => setlogueado(true)}>
                            <h2>Iniciar Sesion</h2>
                            <label>Usuario</label>
                            <input type='text' />
                            <label>Contraseña</label>
                            <input type='text' />
                            <button type='submit'>Login</button>
                        </form>)

                )
            }
        </div>
    )
}

export default Auth
