'use strict';

function SailingShip(parameters) {
  this.name = parameters.name;
  this.model = parameters.model;
  this.color = parameters.color;
  this.mastNumber = parameters.mastNumber;
  this.sailArea = parameters.sailArea;
}

SailingShip.prototype = Object.create(Ship.prototype);
SailingShip.prototype.constructor = SailingShip;