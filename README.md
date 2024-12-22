# Food List Backend

## Descripción

Este proyecto es la parte backend de una aplicación de lista de comidas. Proporciona una API para gestionar los alimentos, donde los usuarios pueden obtener información sobre las comidas disponibles, agregarlas a su pedido, y administrar el stock de las mismas. La base de datos se encuentra en MongoDB, utilizando Mongoose para la interacción con los datos.

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
node src/index.js
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

## Front-End

```bash
https://github.com/AgustinVelazquez0/Food_List_Front
```

## Licencia

Este proyecto está bajo la licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
