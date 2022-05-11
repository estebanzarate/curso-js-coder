let num = parseInt(prompt('Ingrese un número'));

if (num >= 0 && num <= 1000) {
    alert('Presupuesto bajo');
} else if (num > 1000 && num <= 3000) {
    alert('Presupuesto medio');
} else if (num > 3000) {
    alert('Presupuesto alto');
}