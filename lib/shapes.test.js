const { Triangle, Circle, Rectangle } = require('./shapes.js')

describe('Shapes', () => {

    describe('Triangle Render', () => {
        it('should return a svg markdown string to render a triangle', () => {
            const triangle = new Triangle;
            const result = triangle.render();
            expect(result).toEqual(`<polygon points="150,0 300,200 0,200" fill="${triangle.colour}" />`);
        })
    })

    describe('Circle Render', () => {
        it('should return a svg markdown string to render a circle', () => {
            const circle = new Circle;
            const result = circle.render();
            expect(result).toEqual(`<circle cx="150" cy="100" r="100" fill="${circle.colour}" />`);
        })
    })

    describe('Rectangle Render', () => {
        it('should return a svg markdown string to render a rectangle', () => {
            const rectangle = new Rectangle;
            const result = rectangle.render();
            expect(result).toEqual(`<rect width="100%" height="100%" fill="${rectangle.colour}" />`);
        })
    })
})
