import { loginService } from '../services/auth.service.js'

// POST /auth/login
export const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const token = await loginService(email, password)

    if (!token) {
      return res.status(401).json({ error: 'Credenciales inválidas' })
    }

    res.json({ token })
  } catch (error) {
    res.status(500).json({ error: 'Error al autenticar usuario' })
  }
}