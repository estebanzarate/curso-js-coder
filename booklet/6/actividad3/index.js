class Jugador {
    constructor(nombre, numeroCamiseta, edad, lesionado) {
        this.nombre = nombre;
        this.numeroCamiseta = numeroCamiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
}

export const jugadores = [];

const jugador1 = new Jugador('Nombre1', 1, 20, true);
const jugador2 = new Jugador('Nombre2', 2, 20, false);
const jugador3 = new Jugador('Nombre3', 3, 20, true);
const jugador4 = new Jugador('Nombre4', 4, 20, false);
const jugador5 = new Jugador('Nombre5', 5, 20, true);

jugadores.push(jugador1);
jugadores.push(jugador2);
jugadores.push(jugador3);
jugadores.push(jugador4);
jugadores.push(jugador5);