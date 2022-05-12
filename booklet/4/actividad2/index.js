function redondear(decimal) {
    return alert(`${Math.round(decimal)}`);
}

for (let i = 0; i < 5; i++) {
    const numero = prompt('Ingresa un número decimal');
    redondear(numero);
}