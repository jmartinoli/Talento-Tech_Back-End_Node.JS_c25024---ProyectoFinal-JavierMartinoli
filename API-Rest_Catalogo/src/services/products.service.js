import {
  getAllProductsModel,
  getProductByIdModel,
  createProductModel,
  deleteProductModel
} from '../models/products.model.js'

// Llama al modelo y retorna todos los productos
export const getAllProductsService = async () => {
  return await getAllProductsModel()
}

// Llama al modelo y retorna un producto por ID
export const getProductByIdService = async (id) => {
  return await getProductByIdModel(id)
}

// Llama al modelo para crear un producto nuevo
export const createProductService = async (data) => {
  return await createProductModel(data)
}

// Llama al modelo para eliminar un producto
export const deleteProductService = async (id) => {
  return await deleteProductModel(id)
}