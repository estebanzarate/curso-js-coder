let sueldo = parseInt(prompt("Cuánto ganás por mes?"));

if (sueldo <= 50000) {
    alert("Sueldo: $" + sueldo + ". Sos pobre. Sí! Pobre..");
} else if (sueldo > 50000 && sueldo <= 200000) {
    alert("Sueldo: $" + sueldo + ". Digamos que pertenecés a la clase media (ponele)..");
} else {
    alert("Sueldo: $" + sueldo + ". Sos rico. Sí! asquerosamente oligarca..");
}