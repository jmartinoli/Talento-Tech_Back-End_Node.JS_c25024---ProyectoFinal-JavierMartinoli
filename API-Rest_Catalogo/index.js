// Importamos módulos necesarios
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

// Cargamos las variables de entorno desde el archivo .env
dotenv.config()

// Rutas importadas
import authRoutes from './src/routes/auth.routes.js'
import productsRoutes from './src/routes/products.routes.js'

// Creamos una instancia del servidor
const app = express()

// Definimos el puerto del servidor (usa el del .env o 3000 por defecto)
const PORT = process.env.PORT || 3000

// Middleware para permitir peticiones CORS (entre dominios)
app.use(cors())

// Middleware para interpretar el body de las peticiones en formato JSON)
app.use(bodyParser.json())

// Ruta de prueba para chequear si el server responde
app.get('/', (req, res) => {
  res.send('API REST funcionando OK!')
})

// Uso de rutas creadas
app.use('/auth', authRoutes)
app.use('/api/products', productsRoutes)

// Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({ error: 'La ruta que estás buscando no existe' })
})

// Iniciamos el servidor y lo dejamos escuchando peticiones
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

