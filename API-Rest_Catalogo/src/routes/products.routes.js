import { Router } from 'express'
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct
} from '../controllers/products.controller.js'

// Importamos middleware para proteger rutas
import { verifyToken } from '../middlewares/auth.middleware.js'

const router = Router()

// Devuelve todos los productos
router.get('/', verifyToken, getAllProducts)

// Devuelve un producto específico por ID
router.get('/:id', verifyToken, getProductById)

// Crea un nuevo producto
router.post('/create', verifyToken, createProduct)

// Elimina un producto por ID
router.delete('/:id', verifyToken, deleteProduct)

export default router