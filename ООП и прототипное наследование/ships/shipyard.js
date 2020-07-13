'use strict';

function Shipyard(typeOfShip) {
  // this.mooredShips = [];

  // this.moor = function (ship) {
  //   if (this.mooredShips.includes(ship))
  //           throw new Error(`${ship.name} is already moored.`);
  //   this.mooredShips.push(ship);
  //   ship.dropAnchor();
  //   console.log(`${ship.name} is successfully moored.`);
  // }

  // this.unmoor = function (ship) {
  //   if (!this.mooredShips.includes(ship))
  //           throw new Error(`${ship.name} is not at the wharf.`);
  //   let thisShip = this.mooredShips.filter(item => item == ship);
  //   let indexOfThisShip = this.mooredShips.indexOf(thisShip);
  //   let removedShip = this.mooredShips.splice(indexOfThisShip,1);
  //   ship.raiseAnchor();
  //   console.log(`${ship.name} is successfully unmoored.`);
  // }

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

  // this.build = function(shipType, params) {

  // }
  Shipyard.prototype = new Wharf();
}