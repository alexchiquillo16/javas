function obtenerNombres(productos) {
    return productos.map(producto => producto.nombre.toUpperCase());
}
let productos = [
    { nombre: "libro", precio: 1500 },
    { nombre: "camisa", precio: 29000 },
    { nombre: "reloj", precio: 79000 }
]; 
let nombresMayusculas = obtenerNombres(productos);
console.log(nombresMayusculas);
