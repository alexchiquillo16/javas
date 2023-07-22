

const persona3 = {
    nombre: "Maria",
    edad: 30,
    esEstudiante: false
};

persona3
const nuevoObjetoPersona3 = Object.create(persona3);
nuevoObjetoPersona3.nombre = "jeancarlo"
nuevoObjetoPersona3.edad = 25
nuevoObjetoPersona3.esEstudiante = true
console.log(nuevoObjetoPersona3);
