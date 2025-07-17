import jwt from 'jsonwebtoken'

const users = [
  {
    id: '1',
    email: 'admin@admin.com',
    password: '123456'
  }
]

// Función para validar usuario y generar token
export const loginService = async (email, password) => {
  const user = users.find(u => u.email === email && u.password === password)

  if (!user) return null

  // Creamos token JWT
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  )

  return token
}