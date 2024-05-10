

// define an interface for shapes
interface Shape {
    calculateArea(): number;
}

// define a class for circle
class Circle implements Shape {
    constructor(public readonly radius: number) {
        // nothing goes here for now to keep the code simple

    }
    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle implements Shape {
    constructor(private readonly width: number, private readonly height: number) {
        // nothing goes here for now
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}

class ShapeCollection<T extends Shape> {
    private shapes: T[] = [];
    addShape(shape: T): void {
        this.shapes.push(shape);
    }
    getTotalArea(): number {
        let totalArea = 0;
        this.shapes.forEach((shape) => {
            totalArea += shape.calculateArea()
        });
        return totalArea
    }
}
/*
regarding the class above:
We created a generic class as we have learned in three previous courses such as
Java, C#, and advanced Java. The above class holds a collection of objects of any
type T that extends or implements the Shape interface. As you know, when we write T
as type, we mean that there is predefined type for that object and during runtime its type will be declared.
THis gives us freedom and flexibility to define any variable and object format
* */

// installation
const circle = new Circle(14);
const rectangle = new Rectangle(10, 12);
const shapeCollection = new ShapeCollection<Shape>();
shapeCollection.addShape(circle);
shapeCollection.addShape(rectangle);
console.log('Total area of shapes: ', shapeCollection.getTotalArea());

// how to run above code:
// Step 1: tsc <NAME OF THE TYPESCRIPT FILE>
// Step 2: node <NAME OF THE SAME FILE BUT WITH .js FORMAT>