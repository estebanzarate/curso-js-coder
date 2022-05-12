function validacion(cadena) {
    if (cadena != "") {
        return alert(true);
    } else {
        return alert(false);
    }
}

let cadena = prompt('Ingrese un texto');
while (cadena != "ESC") {
    validacion(cadena);
    cadena = prompt('Ingrese un texto');
}