const persona4 = {
    nombre: "alex",
    edad: 28,
    esEstudiante: true
};

const infoAdicional = {
    ocupacion: "Ingeniero",
    ciudad: "Madrid"
};

const personaCombinada = Object.assign({}, persona4, infoAdicional);

console.log(personaCombinada);
