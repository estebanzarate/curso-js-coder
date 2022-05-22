import { tienda1, tienda2, tienda3 } from "../actividad1/index.js";

for (let i = 0; i < 5; i++) {
    const nombre = prompt('Ingresa un nombre');
    if (tienda1.esPropietario(nombre)) {
        alert('El nombre pertenece al dueño de la tienda 1');
    } else if (tienda2.esPropietario(nombre)) {
        alert('El nombre pertenece al dueño de la tienda 2');
    } else if (tienda3.esPropietario(nombre)) {
        alert('El nombre pertenece al dueño de la tienda 3');
    }
}