/* Arranca todo el programa, llama a la app, se inicializa el servidor localhost */
import app from './app.js';
import {PORT,DB_DATABASE,DB_HOST} from './config.js'





app.listen(PORT)
    console.log('SERVER  Corriendo el servidor', PORT)