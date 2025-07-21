//cuando una funcion lanza un error y nunca termina
function lanzarError(mensaje: string):never{
    throw new Error (mensaje);
}
//cuando una funcion entra en un bluce infinito 
function funcionInfinita():never{
    while (true){
        console.log("Esto nunca termina");
    }
}
//En validacion exhaustiva de tipos (switvh, if )
type Forma= "ciruculo " | "cuadrado";

function procesarForma (forma: Forma){
    switch (forma){
        case "ciruculo ":
         console.log("Es un circulo");
         break;
        case "cuadrado":
            console.log("Es un cuarado");
            break;
        default:
            const _exhaustivo:never = forma;//Error si se añade un nuevo tipo y no se maneja 
            break;

    }
}
