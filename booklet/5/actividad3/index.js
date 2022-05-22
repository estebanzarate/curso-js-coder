import { tienda1 } from '../actividad1/index.js';

for (let i = 0; i < 3; i++) {
    const hora = parseInt(prompt("Ingresa una hora"));
    const test = tienda1.estaAbierto(hora);
    if (test) {
        alert('La tienda está abierta');
    } else {
        alert('La tienda está cerrada');
    }
}