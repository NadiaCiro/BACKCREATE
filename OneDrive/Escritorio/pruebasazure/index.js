import app from './app.js'

import {PORT,DB_USER} from './config.js'
import { pool } from './db.js';

app.listen(PORT)
    console.log('SERVER  Corriendo el servidor http://localhost:3001/', PORT,DB_USER)

