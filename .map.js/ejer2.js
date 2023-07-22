function elevar(numeros) {
    return numeros.map(numero => numero ** 2);
} 

let numeros = [2, 4, 6, 8, 10];
let numerosElevados = elevar(numeros);

    console.log(numerosElevados);
