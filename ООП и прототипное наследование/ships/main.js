// Ships
const shipOne = new Ship('"Best ship"', 'Container ship');
shipOne.moveTo({
    x: 10,
    y: 10
});
console.log(shipOne);

/*ship.dropAnchor();*/

shipOne.moveTo({
    x: 20,
    y: 20
});
console.log(shipOne);
shipOne.move('n');
shipOne.move('w');
console.log(shipOne);

const shipTwo = new Ship('Good ship 2');

// Wharfs
const wharfOne = new Wharf ({x: 4, y: 5});

console.log(wharfOne);
wharfOne.moor(shipOne);
wharfOne.unmoor(shipOne);
wharfOne.moor(shipOne);

// MotorShips
const paramsMShipOne = {
    name: 'motorShipName',
    model: 'Tanker',
    color: 'red',
    motorPerformance: 10,
    bodyMaterial: 'wood'
};

const paramsMShipTwo = {
    name: 'motorShipNameToo',
    model: 'Special purpose',
    motorPerformance: 100,
    bodyMaterial: 'concrete'
};

const motorShipOne = new MotorShip(paramsMShipOne);
const motorShipTwo = new MotorShip(paramsMShipTwo);

console.log(motorShipOne);
console.log(motorShipTwo);

// SailingShips
const paramsSShipOne = {
    name: 'sailingShipName',
    model: 'Offshore',
    mastNumber: 1,
    sailArea: 38
};

const sailingShipOne = new SailingShip(paramsSShipOne);

console.log(sailingShipOne);

// Shipyard
const shipyardOne = new Shipyard ({x: 4, y: 5});

console.log(shipyardOne);
shipyardOne.colorize(motorShipOne, 'b');

// MotorShipShipyard
const MotorShipShipyardOne = new MotorShipShipyard('MotorShip', {x: 5, y: 6});
console.log('MotorShipShipyardOne:', MotorShipShipyardOne);