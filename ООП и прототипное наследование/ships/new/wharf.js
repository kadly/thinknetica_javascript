'use strict';

//обменять корабль
function SwapShip(typeOfShip, name) {
  здесь кроме аргументов, указанных выше, нужны ещё MSFIDOCredentialAssertion, color, motorPerformance, bodyMaterial, mastNumber, sailArea
  не понимаю, как это сделать
}

//покрасить корабль
function DyeShip(name, color) {
  switch (color) {
    case 'b':
      this.color = 'black';
      let theShipWasPainted = 1;
      console.log(`${ship.name} has been successfully colored to Black`);
      break;
    case 'w':
      this.color = 'white';
      let theShipWasPainted = 1;
      console.log(`${ship.name} has been successfully colored to White`);
      break;
    default:
      throw new Error(`Invalid color "${this.color}"`);
  }
}

//отремонтировать корабль
function RefitShip(typeOfShip, name) {
  
}

//построить корабль
function BuildShip(typeOfShip, name) {
  
}