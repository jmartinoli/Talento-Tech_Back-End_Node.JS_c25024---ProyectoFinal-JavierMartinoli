import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService
} from '../services/products.service.js'

// Devuelve todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService()
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' })
  }
}

// Devuelve un producto por ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params
    const product = await getProductByIdService(id)
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' })
    }
    res.json(product)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' })
  }
}

// Crea un nuevo producto
export const createProduct = async (req, res) => {
  try {
    const data = req.body
    const newProduct = await createProductService(data)
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(400).json({ error: 'Error al crear producto' })
  }
}

// Elimina un producto por ID
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    await deleteProductService(id)
    res.json({ mensaje: 'Producto eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' })
  }
}