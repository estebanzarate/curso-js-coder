let numero,
    salida = '';

while(numero != 'ESC') {
    numero = prompt('Ingrese un número');
    switch(parseInt(numero)) {
        case 1:
            salida += 'Tomate\n';
            break;
        case 2:
            salida += 'Papa\n';
            break;
        case 3:
            salida += 'Carne\n';
            break;
        case 4:
            salida += 'Pollo\n';
        break;
    }
}

alert(salida);