
const persona1 = {
        nombre: "Ana",
        edad: 30,
        esEstudiante: false
    };
    
    Object.seal(persona1);
    
    persona1.trabajo = "Ingeniera";
    
    delete persona1.esEstudiante;
    
    console.log(persona1);
    