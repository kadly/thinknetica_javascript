'use strict';

function Shipyard(position, typeOfShip) {
  this.position = {
    x: position.x,
    y: position.y
  }

  this.colorize = function(ship, color) {
    // if (!_atTheShipyard)
    //         throw new Error(`${ship.name} is not at the shipyard.`);
    switch (color) {
      case 'b':
        this.color = 'black';
        console.log(`${ship.name} has been successfully colored to Black`);
        break;
      case 'w':
        this.color = 'white';
        console.log(`${ship.name} has been successfully colored to White`);
        break;
      default:
        throw new Error(`Invalid color "${this.color}"`);
    }
  }

  // this.build = function(typeOfShip, params) {

  // }
  function shipFactory() {
    this.createShip = function (typeOfShip) {
      var ship;
      switch(typeOfShip) {
        case 'motorship':
          ship = new MotorShip;
          break;
        case 'sailingship':
          ship = new SailingShip;
          break;
      }
      return ship;
    }
  }
}

Shipyard.prototype = new Wharf();