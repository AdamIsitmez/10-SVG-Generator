const cssColours = require('./colours');

class Validate {

    isText = (input) => {
        //check if the text is greater than 3 characters long
        if (input.length > 3) {
            return 'Please enter a value no greater than 3 characters';
        }
        return true;
    }

    isColour = (input) => {
        // Check if the input is a common color name
        if (cssColours.includes(input.toLowerCase())) {
            return true;
        }

        // Check if the input is a valid hexadecimal color code
        const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
        if (hexColorRegex.test(input)) {
            return true;
        }

        // If neither condition is met, return an error message
        return 'Please enter a valid common color name or a hexadecimal color code (e.g., #RRGGBB).';
    }
}

module.exports = Validate;