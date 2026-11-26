import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/auth'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const manejarEnvio = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(username, password)
      navigate('/panel')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="tarjeta">
      <h2>Bienvenido 🌸</h2>
      <p className="subtitulo">Inicia sesión para continuar</p>
      <form onSubmit={manejarEnvio}>
        <input
          className="campo"
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="campo"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="boton" type="submit">Entrar</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  )
}

export default Login