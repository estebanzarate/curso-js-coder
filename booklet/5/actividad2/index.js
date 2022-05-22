import Tienda from '../actividad1/index.js';

const tiendas = [];

for (let i = 0; i < 5; i++) {
    const nombreTienda = prompt('Ingresa el nombre de la tienda');
    const direccionTienda = prompt('Ingresa la dirección de la tienda');
    const propietarioTienda = prompt('Ingresa el propietario de la tienda');
    const rubroTienda = prompt('Ingresa el rubro de la tienda');
    tiendas.push(new Tienda(nombreTienda, direccionTienda, propietarioTienda, rubroTienda));
}

tiendas.forEach(e => {
    document.body.innerHTML += `
        <div>
            <p>${e.nombre}</p>
            <p>${e.direccion}</p>
            <p>${e.propietario}</p>
            <p>${e.rubro}</p>
        </div>
    `;
});