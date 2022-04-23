let cantidad = parseInt(prompt("Cuántos alumnos querés ingresar?"));
let alumnos = "";
for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Ingresa el nombre del alumno");
    alumnos += nombre + "\n";
}

console.log(alumnos);