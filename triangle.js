var Shape = require("./shape.js");

function Triangle(side1, side2, side3){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
}

Triangle.prototype = new Shape("triangle");

var newTriangle = new Triangle(7,5,12);

newTriangle.get_type();