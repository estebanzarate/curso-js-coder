let dolar = 117.25

function cotizarDolar(pesos) {
    return alert(`Pesos: $${pesos}\nDólares: U$D ${(pesos / 117.25).toFixed(2)}`);
}

function cotizarPeso(dolares) {
    return alert(`Dólares: $ ${dolares}\nPesos: $ ${(dolares * 117.25).toFixed(2)}`);
}

let cotizacion = parseInt(prompt('Selecciona la cotización\n1- Pesos a dólares\n2- Dólares a pesos'));
let valor = parseInt(prompt('Ingresa el valor a convertir'));
switch (cotizacion) {
    case 1:
        cotizarDolar(valor);
        break;
    case 2:
        cotizarPeso(valor);
        break;
}