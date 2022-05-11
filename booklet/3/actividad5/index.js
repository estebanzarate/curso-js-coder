let numero = prompt('Ingrese un número');

while(numero != 'ESC') {
    switch(parseInt(numero)) {
        case 1:
            alert('Tomate');
            break;
        case 2:
            alert('Papa');
            break;
        case 3:
            alert('Carne');
            break;
        case 4:
            alert('Pollo');
            break;
    }
    numero = prompt('Ingrese un número');
}

alert(salida);