import express ,{Request, Response } from "express";
import http from "http";
//Crear una instacia de express

const app = express();

/**
 * Iniciar un servidor que escuche en el puert 4000
 * 
 */

app.get("/",(Request, response:Response)=>{
    response.send("Hola mundo");
});
const server = http.createServer(app);
server.listen(4000, ()=>{
    console.log("Servidor escuchando en el puerto 4000");
});