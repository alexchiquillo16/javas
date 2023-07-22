function multiplicar(numero) {
    return function(otroNumero) {
      return numero * otroNumero;
    };
}


const numeroBase = 5; 
const multiplicarPorNumeroBase = multiplicar(numeroBase);
const otroNumero = 3; 
const resultado = multiplicarPorNumeroBase(otroNumero);

console.log(`${numeroBase} por ${otroNumero} es: ${resultado}`);
