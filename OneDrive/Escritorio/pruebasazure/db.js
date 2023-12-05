import { createPool } from 'mysql2/promise';
import * as fs from 'node:fs/promises';
import { readFileSync } from 'fs'
import { DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD } from "./config.js";

// export const pool = createPool({
//     host: DB_HOST,
//     user: DB_USER,
//     password: DB_PASSWORD,
//     port: DB_PORT,
//     database: DB_DATABASE,
//     ssl: {
//         rejectUnauthorized: false,
//         ca: CERTIFICATE_PATH
//     },
//     connectTimeout: 60000
// });

export const pool = createPool(
    {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        port: 3306,
        ssl: {rejectUnauthorized: false,
        ca:('./certificados/DigiCertGlobalRootCA.crt.pem') }
    });

