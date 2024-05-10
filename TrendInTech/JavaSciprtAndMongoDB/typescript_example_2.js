// define a class for circle
var Circle = /** @class */ (function () {
    function Circle(radius) {
        // nothing goes here for now to keep the code simple
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        // nothing goes here for now
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var ShapeCollection = /** @class */ (function () {
    function ShapeCollection() {
        this.shapes = [];
    }
    ShapeCollection.prototype.addShape = function (shape) {
        this.shapes.push(shape);
    };
    ShapeCollection.prototype.getTotalArea = function () {
        var totalArea = 0;
        this.shapes.forEach(function (shape) {
            totalArea += shape.calculateArea();
        });
        return totalArea;
    };
    return ShapeCollection;
}());
/*
regarding the class above:
We created a generic class as we have learned in three previous courses such as
Java, C#, and advanced Java. The above class holds a collection of objects of any
type T that extends or implements the Shape interface. As you know, when we write T
as type, we mean that there is predefined type for that object and during runtime its type will be declared.
THis gives us freedom and flexibility to define any variable and object format
* */
// installation
var circle = new Circle(14);
var rectangle = new Rectangle(10, 12);
var shaoeCollection = new ShapeCollection();
shaoeCollection.addShape(circle);
shaoeCollection.addShape(rectangle);
console.log('Total area of shapes: ', shaoeCollection.getTotalArea());
// how to run above code:
// Step 1: tsc <NAME OF THE TYPESCRIPT FILE>
// Step 2: node <NAME OF THE SAME FILE BUT WITH .js FORMAT>
