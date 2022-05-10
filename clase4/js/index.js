class Student {
    constructor(name, lastName) {
        this.id = Student.students.length + 1;
        this.name = name;
        this.lastName = lastName;
    }
    static students = [];
    static listStudents() {
        let students = '';
        Student.students.forEach(student => {
            students += `${student.id}) ${student.name} ${student.lastName}\n`;
        })
        return students;
    }
}

function addStudent() {
    let nameStudent = prompt('Ingresá el nombre del alumno'),
        lastNameStudent = prompt('Ingresa el apellido del alumno');
    const newStudent = new Student(nameStudent, lastNameStudent);
    Student.students.push(newStudent);
    app();
}

function renderStudents() {
    alert(`${Student.listStudents()}`);
    app();
}

function app() {
    let options = '1- Agregar alumno\n2- Mostrar lista de alumnos';
    let option = parseInt(prompt(`Selecciona una opción del menú\n\n${options}\n`));
    if(isNaN(option)) {
        alert('Ingresa una de las opciones del menú')
        return app();
    }
    switch(option) {
        case 1:
            addStudent();
            break;
        case 2:
            renderStudents();
            break;
    }
}

app();