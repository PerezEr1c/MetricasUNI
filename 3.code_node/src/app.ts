import express, {Response, Request }from 'express';

class App{
    private app:express.Application;

    constructor(){
        this.app=express();
        this.routes();
    }
    private routes():void{
        this.app.get("/",(request:Request, response:Response)=>{
            response.send("hola mundo");
        });
    
        this.app.get("/check",(request:Request, response:Response)=>{
            response.send("check");
        });
    
        this.app.get("/test",(request:Request, response:Response)=>{
            response.send("esto es un test o una prueba ");
        });
    }
    getApp(){
        return this.app;
    }
    
}
export default new App().getApp();