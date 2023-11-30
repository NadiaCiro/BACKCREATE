/*Tiene todas las configuraciones de express y llama a las rutas */
import express from 'express'
import usersRoutes from './routes/users.routes.js';
import indexRoutes from "./routes/index.routes.js"
import productsRoutes from "./routes/products.routes.js";
import cors from "cors";
import featuredRoutes from './routes/featured.routes.js';

const app = express()
app.use(express.static('public'));

var corsOptions = {
    origin: 'http://127.0.0.1:4200',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors())/*Api consumible, comunicar al front */

app.use(express.json(corsOptions))/*Primero se recibe los datos se convierten a json o un objeto js y luego se pasa a las rutas */


/*Rutas */
app.use(indexRoutes)
app.use('/api',usersRoutes)
app.use('/api', productsRoutes)
app.use('/api', featuredRoutes)

/*Not found Route */
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found2'
    })
}) 

// const express = require('express');

const routes = express.Router();

const printRoutes = (route, path = '') => {
    if (route.stack) {
    route.stack.forEach(layer => {
        if (layer.route) {
        printRoutes(layer.route, `${path}${route.path}`);
        }
    });
    } else {
    const fullPath = `${path}${route.path}`;
    console.log(`Ruta encontrada: ${fullPath}`);
    }
}

printRoutes(routes);

export default app;