//Types
type Usuario = {
  nombre: string;
  edad: number;
  activo: boolean;
};

let user1: Usuario = {
  nombre: "Laura",
  edad: 25,
  activo: true,
};

//Con un primitivo
type ID = number;
let userID: ID = 101;

//Uniones
type Resultado = "ok" | "error" | "pendiente";
let Estado: Resultado = "ok";

//Tuplas
type Coordenada = [x: number, y: number];
let punto: Coordenada = [10, 20];

//Funciones
type Sumar = (a: number, b: number) => number;
const suma: Sumar = (x, y) => x + y;
