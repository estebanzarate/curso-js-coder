export default class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

const tienda1 = new Tienda("Nombre Tienda 1", "Direccion 1", "Propietario 1", "Rubro 1");
const tienda2 = new Tienda("Nombre Tienda 2", "Direccion 2", "Propietario 2", "Rubro 2");
const tienda3 = new Tienda("Nombre Tienda 3", "Direccion 3", "Propietario 3", "Rubro 3");