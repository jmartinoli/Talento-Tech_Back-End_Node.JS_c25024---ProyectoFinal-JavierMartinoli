import { db } from '../config/firebase.js'
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc
} from 'firebase/firestore'

const collectionRef = collection(db, 'products')

// Obtener todos los productos
export const getAllProductsModel = async () => {
  const querySnapshot = await getDocs(collectionRef)
  const products = []
  querySnapshot.forEach(doc => {
    products.push({ id: doc.id, ...doc.data() })
  })
  return products
}

// Obtener producto por ID
export const getProductByIdModel = async (id) => {
  const docRef = doc(db, 'products', id)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() }
  }
  return null
}

// Crear nuevo producto
export const createProductModel = async (data) => {
  const docRef = await addDoc(collectionRef, data)
  return { id: docRef.id, ...data }
}

// Eliminar producto por ID
export const deleteProductModel = async (id) => {
  const docRef = doc(db, 'products', id)
  await deleteDoc(docRef)
}