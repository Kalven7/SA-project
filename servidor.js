import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import bodyParser from 'body-parser';

//import mysql from 'mysql';
//LOAD CONFIG
dotenv.config({path: './config/config.env'});

//run server = express();
const sever = express();
const port = process.env.PORT || 7000;
sever.listen(port, console.log("Servidor  executado em " + process.env.NODE_ENV  + " na porta " + port + "..."));

//define Routes
sever.use(bodyParser.urlencoded({extended:true}));
sever.use(bodyParser.json());
sever.use(router);
