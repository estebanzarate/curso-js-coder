import { jugadores } from "../actividad3/index.js";

const buscarJugador = (equipo, jugador) => {
    return equipo.find(j => j.nombre === jugador);
}

console.log(buscarJugador(jugadores, 'Nombre1'));
console.log(buscarJugador(jugadores, 'Nombre3'));
console.log(buscarJugador(jugadores, 'Nombre5'));