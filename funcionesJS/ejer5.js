function convertirFahrenheitACelsius(temperaturaFahrenheit) {
    const temperaturaCelsius = (temperaturaFahrenheit - 32) * 5/9;
    return temperaturaCelsius;
}


const temperaturaFahrenheitEjemplo = 68;  
const resultadoCelsius = convertirFahrenheitACelsius(temperaturaFahrenheitEjemplo);

console.log(`${temperaturaFahrenheitEjemplo} grados Fahrenheit son ${resultadoCelsius.toFixed(2)} grados celsius.`);
