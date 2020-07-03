'use strict';

function Wharf(position) {
  this.position = {
    x: position.x,
    y: position.y
  }
  this.mooredShips = [];

  this.moor = function (ship) {
    if (this.mooredShips.includes(ship))
      throw new Error(`${ship.name} is already moored.`);
    this.mooredShips.push(ship);
    ship.dropAnchor();
    console.log(`${ship.name} is successfully moored.`);
  }

  this.unmoor = function (ship) {
    if (!this.mooredShips.includes(ship))
      throw new Error(`${ship.name} is not at the wharf.`);
    const indexOfThisShip = this.mooredShips.indexOf(ship);
    this.mooredShips.splice(indexOfThisShip,1);
    ship.raiseAnchor();
    console.log(`${ship.name} is successfully unmoored.`);
  }
}
