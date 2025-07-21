let numeros : number[] = [1,2,3,4];
let frutas: string[]= ["manzana","banana","pera"];
let booleanos:boolean[]=[true, false ,true ];
let numeros2:Array<number>= [1,2,3,4]

type Producto ={nombre: string;precio:number};//Objetos
let catalogo: Producto[] = [
    {nombre: "camisa", precio: 25},
    {nombre: "pantalon", precio: 40},
];

// Acceder un valor 
let primero = frutas[0]; // "manzana"

// Actualizar un valor
numeros[1] =Math.pow(2, 3); // 8

// Añadir un valor
frutas.push("naranja"); // ["manzana", "banana", "pera", "naranja"]
numeros.push(5); // [1, 8, 3, 4, 5]

// liberar un valor
for (let f of frutas){
    console.log(f);
}

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

