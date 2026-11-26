const API_URL = 'http://127.0.0.1:8000/api'

export async function login(username, password) {
  const respuesta = await fetch(`${API_URL}/token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })

  if (!respuesta.ok) {
    throw new Error('Usuario o contraseña incorrectos')
  }

  const data = await respuesta.json()
  localStorage.setItem('access', data.access)
  localStorage.setItem('refresh', data.refresh)
}

export function logout() {
  localStorage.removeItem('access')
  localStorage.removeItem('refresh')
}

export function getToken() {
  return localStorage.getItem('access')
}

export function isAuthenticated() {
  return getToken() !== null
}