class Student {
    constructor(name, lastName, birth, dni, tel) {
        this.id = Student.students.length + 1;
        this.name = name;
        this.lastName = lastName;
        this.birth = birth;
        this.tel = tel;
    }
    static students = [];
}

const d = document;
const $formToAddStudent = d.querySelector('#form-add-student');
const $tableStudentsBody = d.querySelector('#table-students-body');

const addStudent = e => {
    e.preventDefault();
    $inputs = d.querySelectorAll('input[required]');
    $tableStudentsBody.innerHTML += `
        <tr>
            <td>${$inputs[0].value}</td>
            <td>${$inputs[1].value}</td>
            <td>${$inputs[2].value}</td>
            <td>${$inputs[3].value}</td>
            <td>${$inputs[4].value}</td>
        </tr>
    `;
    const student = {
        name: $inputs[0].value,
        lastName: $inputs[1].value,
        birth: $inputs[2].value,
        tel: $inputs[3].value,
        dni: $inputs[4].value
    }
    createStudent(student);
    $formToAddStudent.reset();
    $inputs[0].focus();
}

const createStudent = values => {
    const { name, lastName, birth, dni, tel } = values;
    Student.students.push(new Student(name, lastName, birth, dni, tel));
}

$formToAddStudent.addEventListener('submit', addStudent);