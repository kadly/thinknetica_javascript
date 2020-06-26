'use strict';

function Ship (name, model) {
    let _isAnchorDroped = false;
    this.name = name;
    this.model = model;
    this.distance = 0;
    this.position = {
        x: 0,
        y: 0
    };
    this.speed = 0;
    this.moveTo = function (position) {
        if (_isAnchorDroped)
            throw new Error('You need to raise the anchor');

        this.distance += Math.sqrt((this.position.x - position.x) ** 2 + (this.position.y - position.y) ** 2);

        this.position = {
            x: position.x,
            y: position.y,
        }

    };
    this.move = function (direction) {
        if (_isAnchorDroped)
            throw new Error('You need to raise the anchor');
        switch (direction) {
            case 'n':
                this.position.y += 1;
                console.log('Ship has been successfully moved to N');
                break;
            case 'w':
                this.position.x -= 1;
                console.log('Ship has been successfully moved to W');
                break;
            case 's':
                this.position.y -= 1;
                console.log('Ship has been successfully moved to S');
                break;
            case 'e':
                this.position.x += 1;
                console.log('Ship has been successfully moved to E');
                break;
            default:
                console.log('Error');
        }
        this.distance += 1;
    };

    this.isAnchorDroped = function () {
        console.log('isAnchorDroped', this);
        return _isAnchorDroped;
    };

    /**
     * @param {boolean} droped
     */
    this.dropAnchor = () => {
        if (this.speed !== 0)
            throw new Error('Speed must be 0');

        _isAnchorDroped = true;
    };

    this.raiseAnchor = () => {
        if (this.speed !== 0)
            throw new Error('Speed must be 0');

        _isAnchorDroped = false;
    };
}



// console.log(ship);
// console.log(ship.getAnchorDroped());
// // ship._isAnchorDroped = true; Так нельзя
// console.log(ship);
// console.log('  after 1 try', ship.getAnchorDroped());
// ship.speed = 0;
// ship.setAnchorDroped(true);
// console.log(ship);
// console.log(ship.getAnchorDroped());




// const car = {
//     model: 'Model X',
//     seats: 4,
// }

// dropAnchor(ship);
// dropAnchor(car);

// function dropAnchor(ship) {
//     console.log(ship);
//     console.log(typeof ship);

//     if (!(ship instanceof Ship))
//         throw new Error('Not a Ship');

//     ship.isAnchorDroped = true;
// }









// Save it

// const arr = {
//     '0': 'a',
//     '1': 'b',
//     length: 2,
// }

// for (let i = 0; i < arr.length; i++)
//     console.log(arr[i]);

// Array.from(arr)
//      .forEach(item => console.log(item))