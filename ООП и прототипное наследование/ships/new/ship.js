'use strict';

//корабль
function Ship(name, model, color) {
  this.name = name;
  this.model = model;
  this.color = color;
}

//моторный корабль
function MotorShip(parameters) {
  this.name = parameters.name;
  this.model = parameters.model;
  this.color = parameters.color;
  this.motorPerformance = parameters.motorPerformance;
  this.bodyMaterial = parameters.bodyMaterial;
}

//парусный корабль
function SailingShip(parameters) {
  this.name = parameters.name;
  this.model = parameters.model;
  this.color = parameters.color;
  this.mastNumber = parameters.mastNumber;
  this.sailArea = parameters.sailArea;
}

MotorShip.prototype = Object.create(Ship.prototype);
MotorShip.prototype.constructor = MotorShip;

SailingShip.prototype = Object.create(Ship.prototype);
SailingShip.prototype.constructor = SailingShip;