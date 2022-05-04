//Pregunta la cantidad de alumnos que se va a ingresar
let cantidad = parseInt(prompt("Cuántos alumnos querés ingresar?"));
let alumnos = "";

//Ingresar alumnos
for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Ingresa el nombre del alumno");
    alumnos += nombre + "\n";
}

//Muestra alumnos ingresados
console.log(alumnos);