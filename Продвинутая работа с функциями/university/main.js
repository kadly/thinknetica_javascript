// Students
const studentOne = new Student('Ivanov Ivan Ivanovich');
console.log(studentOne.shortFormName());
const studentTwo = new Student('Petrov Petr Petrovich');

console.log(studentOne.splitName());
console.log(studentOne.shortFormName());
console.log('Отмечен как отсутствующий?');
studentOne.noteALack();
console.log(studentOne.studentPresence());

console.log(studentTwo);
console.log(studentTwo.splitName());
console.log(studentTwo.shortFormName());
console.log('Отмечен как отсутствующий?');
//studentTwo.noteALack();
console.log(studentTwo.studentPresence());


// Groups
const groupOne = new Group(1);

groupOne.addStudent(studentOne);
groupOne.addStudent(studentTwo);
console.log(groupOne);
groupOne.listOfStudents();
groupOne.lackedStudents();
console.log(groupOne.lackedStudents());
//console.log(groupOne.studentList());