class Shape {
    constructor(color, initX, initY){
        this.color = color;
        this.coordX = initX;
        this.coordY = initY;
        this.getColor = function()  {
            return this.color;
        };
        this.setColor = function  (val) {
            this.color = val;
        };
        this.getCoords = function ()  {
            return `(x: ${this.coordX}, y: ${this.coordY})`;
        };
        this.moveTo = function(newX, newY)  {
            this.coordX = newX;
            this.coordY = newY;
        }
    }
}

class Rectangle extends Shape {
    constructor(color, initX, initY, initWidth, initHeight){
        super(color, initX, initY);
        this.width = initWidth;
        this.height = initHeight;
        this.setWidth = function(newWidth)  {
            this.width = newWidth;
        };
        this.setHeight = function(newHeight)  {
            this.height = newHeight;
        };
        this.getDims = function()  {
            return `width: ${this.width}, height: ${this.height}`;
        };
        this.draw = function() {
            return `Drawing a Rectangle at:
                    ${this.getCoords()}
                    Width dimentions:
                    ${this.getDims()}
                    Filled with color:
                    ${this.getColor()}`;
        }
    }
}

class Circle extends Shape {
    constructor(color, initX, initY, initRadius){
        super(color, initX, initY);
        this.radius = initRadius;
        this.getRadius = function() {
            return this.radius;
        };
        this.setRadius = function(val) {
            this.radius = val;
        };
        this.draw = function()  {
            return `Drawning a Circle at:
                ${this.getCoords()}
            Width dimentions:
                radius: ${this.getRadius()}
            Filled width color: ${this.getColor()}`;
        }
    }
}

let shape = new Shape('red', 23, 45);
console.log(shape);
let rectangle = new Rectangle('black', 4, 4, 5, 40);
console.log(rectangle.draw());
let circle = new Circle('#fff', 40, 30, 30);
console.log(circle);
console.log(circle.draw());
