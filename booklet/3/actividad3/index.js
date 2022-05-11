let listaAlumnos = '';
for(let i = 0; i < 10; i++) {
    let alumno = prompt('Ingrese un alumno');
    listaAlumnos += `${alumno}\n`;
}
alert(listaAlumnos);