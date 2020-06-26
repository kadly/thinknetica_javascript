// Ships
const shipOne = new Ship('"Best ship"', 'Container ship');
shipOne.moveTo({
    x: 10,
    y: 10
});
console.log(shipOne);

//ship.dropAnchor();

shipOne.moveTo({
    x: 20,
    y: 20
});
console.log(shipOne);
shipOne.move('n');
shipOne.move('w');
console.log(shipOne);

const shipTwo = new Ship('Good ship 2');


// Whrfs
const wharfOne = new Wharf ({x: 4, y: 5});

console.log(wharfOne);
wharfOne.moor(shipOne);
wharfOne.unmoor(shipOne);
wharfOne.moor(shipOne);