'use strict';

function MotorShip(parameters) {
    this.name = parameters.name;
    this.model = parameters.model;
    this.color = parameters.color;
    this.motorPerformance = parameters.motorPerformance;
    this.bodyMaterial = parameters.bodyMaterial;
}

MotorShip.prototype = Object.create(Ship.prototype);
MotorShip.prototype.constructor = MotorShip;