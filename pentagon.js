var Shape = require("./shape.js");

function Pentagon(side1, side2, side3, side4, side5){
    this.side1 = parseInt(side1);
    this.side2 = parseInt(side2);
    this.side3 = parseInt(side3);
    this.side4 = parseInt(side4);
    this.side5 = parseInt(side5);
}


Pentagon.prototype = new Shape("pentagon");

var newPentagon = new Pentagon(10,11,10,11, 15);

newPentagon.get_type();