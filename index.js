const inquirer = require('inquirer');
const fs = require('fs');
const Validate = require('./lib/validate');
const { createShape } = require('./lib/shapes');
const generateSvg = require('./lib/generateSvg');

const validate = new Validate;

const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter text for the logo. (Must not be greater than 3 characters.):',
        validate: input => validate.isText(input)
    },
    {
        type: 'input',
        name: 'textColour',
        message: 'Enter a text colour:',
        validate: input => validate.isColour(input)
    },
    {
        type: 'list',
        name: 'logoShape',
        message: 'Select a shape for the logo:',
        choices: ['Triangle', 'Rectangle', 'Circle']
    },
    {
        type: 'input',
        name: 'shapeColour',
        message: 'Enter a shape colour: ',
        validate: input => validate.isColour(input)
    },
];

//Generates new svg file and logs "Generated logo.svg"
function writeToFile(filename, shape, answers) {
    fs.writeFile(filename, generateSvg(shape, answers), err => {
        if (err) {
            console.error(err);
        } else {
            console.log("Generated logo.svg")
        }
    });
}

//function to initiate the program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const shape = createShape(answers);
            writeToFile("logo.svg", shape, answers);
        })
}

init();
