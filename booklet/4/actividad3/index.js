function impuesto(precio, porcentaje) {
    precio += (porcentaje / 100) * precio;
    return alert(`Total: ${precio}`);
}

for (let i = 0; i < 5; i++) {
    const precio = parseInt(prompt('Ingrese un precio'));
    const porcentaje = parseInt(prompt('Ingrese un porcentaje'));
    impuesto(precio, porcentaje);
}