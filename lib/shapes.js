//shape class declarations
class Triangle {
    constructor(colour) {
        this.colour = colour;
    }

    render() {
        return `<polygon points="150,0 300,200 0,200" fill="${this.colour}" />`
    }
}

class Circle {
    constructor(colour) {
        this.colour = colour;
    }

    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.colour}" />`
    }
}

class Rectangle {
    constructor(colour) {
        this.colour = colour;
    }

    render() {
        return `<rect width="100%" height="100%" fill="${this.colour}" />`
    }
}

//takes in the input from the users and creates a shape class 
function createShape(shape) {
    switch (shape.logoShape) {
        case 'Circle':
            const circle = new Circle(shape.shapeColour)
            return circle
        case 'Rectangle':
            const rectangle = new Rectangle(shape.shapeColour)
            return rectangle;
        case 'Triangle':
            const triangle = new Triangle(shape.shapeColour)
            return triangle;
        default:
            console.log("error")
    }
}

module.exports = { Triangle, Circle, Rectangle, createShape };