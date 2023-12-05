
import app from './app.js';
import usersRoutes from './routes/users.routes.js';
import indexRoutes from "./routes/index.routes.js"
import productsRoutes from "./routes/products.routes.js";
import featuredRoutes from './routes/featured.routes.js';

app.use(indexRoutes);
app.use('/api',usersRoutes);
app.use('/api', productsRoutes);
app.use('/api', featuredRoutes);

import {PORT} from './config.js';

app.listen(PORT)
    console.log('SERVER  Corriendo el servidor', PORT);