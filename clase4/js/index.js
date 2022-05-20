class Student {
    constructor(name, lastName) {
        this.id = Student.students.length + 1;
        this.name = name;
        this.lastName = lastName;
    }
    static students = [];
}

const d = document;
const $formToAddStudent = d.querySelector('#form-add-student');
const $tableStudentsBody = d.querySelector('#table-students-body');

console.log($tableStudentsBody);

function addStudent(e) {
    e.preventDefault();
    $inputs = d.querySelectorAll('input[required]');
    $tableStudentsBody.innerHTML += `
        <tr>
            <td>${$inputs[0].value}</td>
            <td>${$inputs[1].value}</td>
            <td>${$inputs[2].value}</td>
        </tr>
    `;
    $inputs.forEach(el => {
        el.value = "";
    });
    $inputs[0].focus();
}

$formToAddStudent.addEventListener('submit', addStudent);