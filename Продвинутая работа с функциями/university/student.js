'use strict';

function Student(name) {

  let _studentPresence = true;

  this.splitName = function () {
    const splittedName = name.split(' ');
    this.lastName = splittedName[0];
    this.firstName = splittedName[1];
    this.patronymicName = splittedName[2];
    const fullName = this.lastName + ' ' +
      this.firstName + ' ' +
      this.patronymicName;
    return fullName;
  };

  this.shortFormName = function () {
    const shortName = (
      this.lastName + ' ' +
      this.firstName[0] + '.' +
      this.patronymicName[0] + '.'
    );
    return shortName;
  };

  this.studentPresence = function () {
    return _studentPresence;
  };

  this.noteALack = () => {
    _studentPresence = false;
  };

  this.splitName();
};