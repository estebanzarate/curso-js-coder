class Cliente {
    constructor(nombre, presupuesto, tarjetaDescuento, tel) {
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.tarjetaDescuento = tarjetaDescuento;
        this.tel = tel;
    }
    transferirDinero(valor) {
        if (valor < this.presupuesto && valor > 0) {
            return true;
        } else {
            return false;
        }
    }
}

const cliente1 = new Cliente('Cliente1', 100, true, 1111111111);
const cliente2 = new Cliente('Cliente2', 200, false, 2222222222);
const cliente3 = new Cliente('Cliente3', 300, true, 3333333333);

for (let i = 0; i < 5; i++) {
    const monto = parseInt(prompt('Ingresa el monto a transferir'));
    if (cliente1.transferirDinero(monto)) {
        alert('El cliente1 cuenta con el presupuesto suficiente para realizar la transferencia por el monto ingresado');
    } else {
        alert('El cliente1 NO cuenta con el presupuesto suficiente para realizar la transferencia por el monto ingresado');
    }
    if (cliente2.transferirDinero(monto)) {
        alert('El cliente2 cuenta con el presupuesto suficiente para realizar la transferencia por el monto ingresado');
    } else {
        alert('El cliente2 NO cuenta con el presupuesto suficiente para realizar la transferencia por el monto ingresado');
    }
    if (cliente3.transferirDinero(monto)) {
        alert('El cliente3 cuenta con el presupuesto suficiente para realizar la transferencia por el monto ingresado');
    } else {
        alert('El cliente3 NO cuenta con el presupuesto suficiente para realizar la transferencia por el monto ingresado');
    }
}