const jugadores = [];

let nombre = prompt('Ingresa el nombre del jugador');

while (nombre != 'ESC') {
    jugadores.push(nombre);
    nombre = prompt('Ingresa el nombre del jugador');
}

let nombres = '';
jugadores.forEach((nombre, posicion) => nombres += `Nombre del jugador: ${nombre} Posición del jugador: ${posicion}\n`);

alert(nombres);