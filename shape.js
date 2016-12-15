

var Shape = function (type) {
    this.type = type;
    this.get_type = function(){
        if (this instanceof Shape){
            if (this.type === "square") {
                console.log("It's a square!");
                console.log(this.side1 + "\n" + this.side2 + "\n" + this.side3 + "\n" + this.side4);
            }
            else if (this.type === "triangle") {
                console.log("It's a triangle!");
                console.log(this.side1 + "\n" + this.side2 + "\n" + this.side3);
            }
            else if (this.type === "pentagon") {
                console.log("It's a pentagon!");
                console.log(this.side1 + "\n" + this.side2 + "\n" + this.side3 + "\n" + this.side4 + "\n" + this.side5);
            }
            else {
                console.log("hmm I've never heard of this shape before...");
            }
        }
        else {
            console.log("This is not a shape");
        }
    };
    
}

module.exports = Shape;



