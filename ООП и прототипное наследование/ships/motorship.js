'use strict';

function MotorShip(name) {
    this.name = name;
    //this.model = model;
    this.motorPerformance = motorPerformance;
    this.bodyMaterial = bodyMaterial;
}

MotorShip.prototype = Object.create(Ship.prototype);
MotorShip.prototype.constructor = MotorShip;

const motorShipOne = new MotorShip(parameters);
const parameters = {
    name: 'shipName',
    model: 'Tanker',
    motorPerformance: 10,
    bodyMaterial: 'wood'
};

console.log('Является ли motorShipOne экземпляром MotorShip? ' + (motorShipOne instanceof MotorShip));
console.log('Является ли motorShipOne экземпляром Ship? ' + (motorShipOne instanceof Ship));

console.log(motorShipOne);

console.log('name: ' + motorShipOne.name, ',', 'model: ' + motorShipOne.model, motorShipOne.motorPerformance, motorShipOne.bodyMaterial);