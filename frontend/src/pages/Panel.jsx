import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken, logout } from '../services/auth'

function Panel() {
  const [mensaje, setMensaje] = useState('Cargando...')
  const navigate = useNavigate()

  const cerrarSesion = () => {
    logout()
    navigate('/login')
  }

  useEffect(() => {
    const cargarDatos = async () => {
      const respuesta = await fetch('http://127.0.0.1:8000/api/privado', {
        headers: { Authorization: `Bearer ${getToken()}` },
      })

      if (respuesta.status === 401) {
        logout()
        navigate('/login')
        return
      }

      const data = await respuesta.json()
      setMensaje(data.mensaje)
    }
    cargarDatos()
  }, [navigate])

  return (
    <div className="tarjeta">
      <h2>Panel privado</h2>
      <p className="subtitulo">Solo se puede ver con un token válido</p>
      <div className="mensaje">
        Respuesta del servidor: <strong>{mensaje}</strong>
      </div>
      <button className="boton boton-salir" onClick={cerrarSesion}>
        Cerrar sesión
      </button>
    </div>
  )
}
export default Panel