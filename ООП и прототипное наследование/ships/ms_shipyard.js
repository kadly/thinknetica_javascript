'use strict';

function MotorShipShipyard(typeOfShip, position) {
    this.typeOfShip = typeOfShip;
    this.position = {
      x: position.x,
      y: position.y
    }
}

// MotorShipShipyard.prototype = Object.create(Shipyard.prototype);
// MotorShipShipyard.prototype.constructor = MotorShipShipyard;
// or just
MotorShipShipyard.prototype = new Shipyard();