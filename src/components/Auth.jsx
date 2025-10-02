import React, { useState } from 'react'

function Auth({ usuario }) {
    const [loading, setLoading] = useState(false);
    const [logueado, setlogueado] = useState(false);

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
                                <p>Nombre: {usuario.nombre}</p>
                                <p>Email: {usuario.email}</p>
                                <p>Rol: {usuario.rol}</p>
                                <p>Ultimo acceso: {usuario.ultimoAcceso}</p>
                            </div>
                            <div>
                                <h2>Botones segun rol</h2>
                                {(usuario.rol === "admin" || usuario.rol === "editor") ?
                                    (
                                        <div>
                                            <button>Gestionar contenido</button>
                                            {usuario.rol === "admin" ?
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
                        (<form onSubmit={() => setlogueado(true)} className='registration-form'>
                            <h2>Iniciar Sesion</h2>
                            <div className='form-group'>
                                <label>Usuario</label>
                                <input type='text' />
                                <label>Contraseña</label>
                                <input type='text' />
                                <button type='submit'>Login</button>
                            </div>

                        </form>)

                )
            }
        </div>
    )
}

export default Auth
