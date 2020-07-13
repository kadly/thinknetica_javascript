'use strict';

function Ship (name, model, color) {
    let _isAnchorDroped = false;
    let _atTheShipyard = false;
    this.name = name;
    this.model = model;
    this.color = color;
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
                throw new Error(`Invalid direction "${direction}"`);
        }
        this.distance += 1;
    };

    this.isAnchorDroped = function () {
        console.log('isAnchorDroped', this);
        return _isAnchorDroped;
    };
    
    this.atTheShipyard = function () {
        console.log('atTheShipyard', this);
        return _atTheShipyard;
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

    this.goToShipyard = () => {
        _atTheShipyard = true;
    };

    this.getOutOfShipyard = () => {
        _atTheShipyard = false;
    };
}

