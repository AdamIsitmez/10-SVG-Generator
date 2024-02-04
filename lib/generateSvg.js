//generates an svg depending on input answers

function generateSvg(shape, answers) {

    const yValue = answers.logoShape === 'Triangle' ? `"60%"` : `"50%"`; //if the chosen shape is a triangle, the text is placed slightly lower on the shape.

    return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">


    ${shape.render()}


    <text x="50%" y=${yValue} dominant-baseline="central" text-anchor="middle" fill="${answers.textColour}" font-size="50">${answers.logoText}</text>
  
    </svg>
    `
}

module.exports = generateSvg;