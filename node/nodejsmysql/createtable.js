// host=comprascreate.mysql.database.azure.com
// usern=admin_compras_create
// password={your-password}
// database=compras_create
// ssl-mode=require
// import mysql from 'mysql2';
// import fs from 'fs';

// var config =
// {
//     host: 'comprascreate.mysql.database.azure.com',
//     user: 'admin_compras_create',
//     password: 'compras_create12',
//     database: 'compras_create',
//     port: 3306,
//     ssl: {ca: fs.readFileSync("C:\Users\hp\Downloads\DigiCertGlobalRootCA.crt.pem")}
// };

// const conn = new mysql.createConnection(config);

// conn.connect(
//     function (err) { 
//     if (err) { 
//         console.log("!!! Cannot connect !!! Error:");
//         throw err;
//     }
//     else
//     {
//     console.log("Connection established.");
//         queryDatabase();
//     }
// });
