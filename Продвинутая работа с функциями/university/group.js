'use strict';

function Group(number) {
  this.number = number;
  this.students = [];

  this.addStudent = function (student) {
    this.students.push(student);
  };

  this.listOfStudents = function () {
    console.log('All students: ');
    for (let i = 0; i < this.students.length; ++i) {
      console.log(this.students[i].shortFormName());
    };
  };

  this.lackedStudents = function () {
    console.log('Lacked students: ','\n');
    return this.students.filter(student => !student.studentPresence() == false);
  }
};