# Food List Backend

## Description

This project is the backend part of a food list application. It provides an API to manage food items, where users can retrieve information about available food, add them to their order, and manage the stock of these items. The database is hosted on MongoDB, using Mongoose for data interaction.

## Requirements

- Node.js (version 14 or higher)
- MongoDB running locally or on a server

## Installation

1. Clone the repository:

```bash
git clone git@github.com:AgustinVelazquez0/Food_List_Back.git
```

2. Navigate to the backend directory:

```bash
cd Food_List_Back
```

3. Install dependencies:

```bash
npm install
```

## Scripts

- **Start the server**: To start the API server, run the following command:

```bash
npm start
```

## Front-End

- **Start the server**: Make sure to also start the front-end server.

## Routes

The backend exposes the following available routes:

### `GET /foods`

Retrieves the list of all available foods.

### `POST /foods`

Adds a new food item to the stock.

### `PUT /foods/:id`

Updates information of a specific food item.

### `DELETE /foods/:id`

Deletes a food item from the stock.

## Contribution

If you want to contribute to this project, please follow the installation steps and create a branch for your changes:

```bash
git checkout -b branch-name
```

Then, make your changes and open a Pull Request to the `main` branch of the project.

## Front-End

```bash
https://github.com/AgustinVelazquez0/Food_List_Front
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
