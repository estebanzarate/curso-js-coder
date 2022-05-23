import { jugadores } from '../actividad3/index.js';

const filtroJugadores = (equipo, edad) => {
    return equipo.filter(j => j.edad === edad);
}

console.log(filtroJugadores(jugadores, 20));
console.log(filtroJugadores(jugadores, 21));
console.log(filtroJugadores(jugadores, 22));
console.log(filtroJugadores(jugadores, 23));