# Food List Backend

## Descripción

Este proyecto es la parte backend de una aplicación de lista de comidas. Proporciona una API para gestionar los alimentos, donde los usuarios pueden obtener información sobre las comidas disponibles, agregarlas a su pedido, y administrar el stock de las mismas. La base de datos se encuentra en MongoDB, utilizando Mongoose para la interacción con los datos.

## Estructura del Proyecto

La estructura del backend es la siguiente:

```
/home/agustinv/food_list_back/Food_List_Back
├── README.md           # Este archivo
├── package-lock.json    # Bloqueo de dependencias
├── package.json         # Dependencias y scripts
└── src
    ├── index.js         # Archivo principal para iniciar el servidor
    ├── models
    │   └── food.js      # Modelo para los alimentos en la base de datos
    └── routes
        └── foodRoutes.js  # Rutas que gestionan las peticiones relacionadas con los alimentos
```

## Requisitos

- Node.js (versión 14 o superior)
- MongoDB corriendo localmente o en un servidor

## Instalación

1. Clona el repositorio:

```bash
git clone git@github.com:AgustinVelazquez0/Food_List_Back.git
```

2. Navega al directorio del backend:

```bash
cd Food_List_Back
```

3. Instala las dependencias:

```bash
npm install
```

4. Configura la base de datos. Asegúrate de que MongoDB esté corriendo localmente o configura la URI de conexión si usas MongoDB Atlas. El archivo `.env` debería contener lo siguiente:

```
MONGO_URI=mongodb://localhost:27017/foodlist
```

## Scripts

- **Iniciar el servidor**: Para iniciar el servidor de la API, ejecuta el siguiente comando:

```bash
npm start
```

- **Desarrollo (con nodemon)**: Si deseas trabajar en modo desarrollo, ejecuta:

```bash
npm run dev
```

## Rutas

El backend tiene las siguientes rutas disponibles:

### `GET /foods`

Obtiene la lista de todos los alimentos.

### `POST /foods`

Agrega un nuevo alimento al stock.

### `PUT /foods/:id`

Actualiza la información de un alimento específico.

### `DELETE /foods/:id`

Elimina un alimento del stock.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los pasos de instalación e inicia una rama para tus cambios:

```bash
git checkout -b nombre-de-la-rama
```

Después, realiza tus cambios y abre un Pull Request a la rama `main` del proyecto.

## Licencia

Este proyecto está bajo la licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
