var Shape = require("./shape.js");

function Square(side1, side2, side3, side4){
    this.side1 = parseInt(side1);
    this.side2 = parseInt(side2);
    this.side3 = parseInt(side3);
    this.side4 = parseInt(side4);
}


Square.prototype = new Shape("square");

var newSquare = new Square(10,10,10,10);

newSquare.get_type();