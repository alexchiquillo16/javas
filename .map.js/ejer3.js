function obtener(strings) {
    return strings.map(string => string.length);
}
    let strings = ["Hola", "Mundo", "JavaScript", "OpenAI"];

    let longitudes = obtener(strings);

    console.log(longitudes);
