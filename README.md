Pasos para probar la API 
------------------------

# 1- Instalación de dependencias
npm install express cors body-parser dotenv firebase jsonwebtoken
ó 
npm install 
(se van a instalar automáticamente todas las dependencias necesarias.)

Estas son las dependencias que se usaroin:
- express: Framework web para crear el servidor.
- cors: Middleware para permitir peticiones desde otros orígenes.
- body-parser: Permite leer el body de las peticiones en JSON.
- dotenv: Para manejar variables de entorno (como claves privadas).
- firebase: SDK para conectarse a Firestore.
- jsonwebtoken: Para implementar autenticación con JWT.

# 2- Pasos para probar funcionalidad del proyecto (A modo recordatorio para el futuro)

1_ npm install
se van a instalar automáticamente todas las dependencias necesarias.
Esto comúnmente se ejecuta cuando se baja el repo de GitHub

2_ npm run start
se debería ver:
Servidor corriendo en http://localhost:3000


PRUEBAS CON POSTMAN (Se adjuntan capturas de pantalla en carpeta TEST)
-------------------
# 1 Testear Login para Obtener el token JWT

Petición:
Método: POST
URL: http://localhost:3000/auth/login
Body → JSON:

{
  "email": "a@admin.com",
  "password": ""
}

Respuesta esperada:

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..

}


# 2 Obtener todos los productos (GET /api/products)

Petición:
Método: GET
URL: http://localhost:3000/api/products
Headers: Authorization: Bearer <token anterior>

Respuesta esperada:

[
    {
        "id": "0001",
        "name": "CamisetaSanLorenzo2025",
        "category": "Ropa Deportiva",
        "stock": 25,
        "price": 99000,
        "description": "Camiseta Titultar San Lorenzo 2025 - Atomik Home"
    }
]

# 3 Obtener un producto por ID (GET /api/products/:id)

Petición:
Método: GET
URL: http://localhost:3000/api/products/0001
Headers:Authorization: Bearer <token>


Respuesta:

{
    "id": "0001",
    "stock": 25,
    "name": "CamisetaSanLorenzo2025",
    "price": 99000,
    "category": "Ropa Deportiva",
    "description": "Camiseta Titultar San Lorenzo 2025 - Atomik Home"
}


# 4 Crear un producto nuevo (POST /api/products/create)
Petición:
Método: POST
URL: http://localhost:3000/api/products/create
Headers: Authorization: Bearer <token> Body → JSON:

    {
        "id": "0002",
        "name": "CamisetaSanLorenzo2025Suplente",
        "category": "Ropa Deportiva",
        "stock": 20,
        "price": 102000,
        "description": "Camiseta Titultar San Lorenzo 2025 - Atomik Away"
    }

Respuesta:

[
    {
        "id": "0002",
        "name": "CamisetaSanLorenzo2025Suplente",
        "category": "Ropa Deportiva",
        "stock": 20,
        "price": 102000,
        "description": "Camiseta Titultar San Lorenzo 2025 - Atomik Away"
    }
]

# 5 - Eliminar un producto (DELETE /api/products/:id)

Petición:
Método: DELETE
URL: http://localhost:3000/api/products/0002
Headers: Authorization: Bearer <token>

Respuesta:
{
  "mensaje": "Producto eliminado correctamente"
}

# 6 - Probar protección con JWT
Petición:
Método: GET
URL: http://localhost:3000/pepito

Respuesta esperada:

{
  "error": "La ruta que estás buscando no existe"
}


Estructura de carpetas por capas:
---------------------------------
api-rest_catalogo/
│
├── index.js
├── package.json
├── .env
└── src/
    ├── routes/   # define las rutas disponibles.
    │   ├── auth.routes.js
    │   └── products.routes.js
    ├── controllers/   # reciben y responden las peticiones
    │   ├── auth.controller.js
    │   └── products.controller.js
    ├── services/   # contienen la lógica de negocio
    │   ├── auth.service.js
    │   └── products.service.js
    ├── models/   # se encargan de acceder a los datos (Firestore).
    │   ├── auth.model.js
    │   └── products.model.js
    ├── middlewares/   # para validaciones como JWT
    │   └── auth.middleware.js
    └── config/   # archivos de configuración (como Firebase).
        └── firebase.js
