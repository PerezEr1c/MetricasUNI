let persona: [string, number, boolean] = ["Juan", 30, true];
let cordenadas: [number, number] = [34.5, -20.6];

function dividir (a: number, b: number): [number, number] {
    return [Math.floor(a / b), a % b];
}

const [cociente, residuo] = dividir(10, 3); // cociente: 3, residuo: 1