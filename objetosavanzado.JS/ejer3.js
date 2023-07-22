const persona2 = {
    nombre: "Juan",
    edad: 25,
    esEstudiante: true
};


Object.defineProperty(persona2, "ocupacion", {
    value: "", 
    writable: true,      
    enumerable: true,    
    configurable: true   
});

console.log(persona2);
