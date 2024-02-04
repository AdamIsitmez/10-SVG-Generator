const Validate = require('./validate')

describe('Validate', () => {

    describe('Text length', () => {
        it('should return an invalid input message for an input that is more than 3 characters long', () => {
            const validate = new Validate;
            const result = validate.isText("ABCD");
            expect(result).toEqual('Please enter a value no greater than 3 characters');
        })

        it('should return true for an input that is 3 characters long', () => {
            const validate = new Validate;
            const result = validate.isText("ABC");
            expect(result).toEqual(true);
        })
    })

    describe('Colour format', () => {
        it('should return an invalid input message for an input that is not in the cssColours array', () => {
            const validate = new Validate;
            const result = validate.isColour("notacolour");
            expect(result).toEqual('Please enter a valid common color name or a hexadecimal color code (e.g., #RRGGBB).');
        })

        it('should return an invalid input message for an input that is not in hex format', () => {
            const validate = new Validate;
            const result = validate.isColour("#hyjk");
            expect(result).toEqual('Please enter a valid common color name or a hexadecimal color code (e.g., #RRGGBB).');
        })
    })
})