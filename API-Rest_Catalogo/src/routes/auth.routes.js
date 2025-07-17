import { Router } from 'express'
import { loginUser } from '../controllers/auth.controller.js'

const router = Router()

// Ruta para hacer login y recibir un token si las credenciales son válidas
router.post('/login', loginUser)

export default router