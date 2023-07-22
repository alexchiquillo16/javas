const persona = {
    nombre: "Juan",
    edad: 25,
    esEstudiante: true
  };
  
  Object.freeze(persona);
  
  persona.nombre = "Pedro";
  persona.edad = 30;
  persona.esEstudiante = false;
  
  console.log(persona);
  