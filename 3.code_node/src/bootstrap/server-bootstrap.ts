import express from 'express';
import http from "http";
export class ServerBootstrap{
    private app:express.Application;
    constructor(app:express.Application){
        this.app = app;
    }
    init ():void{
        const server= http.createServer(this.app);
        const PORT=4000;
        server.listen(PORT, ()=>{
            console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
        });
    }
}
