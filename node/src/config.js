//import 'dotenv/config.js'
//require('dotenv').config();
//import './loadEnv';
//import express from 'express';
//import 'dotenv/config'
//dotenv.config()
import { config } from 'dotenv';
config();


export const PORT = process.env.PORT || 3001/*PORT: Es el servidor */
export const DB_USER = process.env.USER_DB || 'root'
export const DB_HOST = process.env.HOST_DB || 'localhost'
export const DB_DATABASE = process.env.DATABASE_DB || 'compras_create'
export const DB_PORT = process.env.PORT_DB || 3306/*Puerto de la base de datos */
export const DB_PASSWORD = process.env.PASSWORD_DB || ''/*Puerto de la base de datos */



//host: 'localhost',
//user: 'root',
//password: "root",
//port: 3306,
//database: 'compras_create'