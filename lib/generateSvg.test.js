const generateSvg = require('./generateSvg');

describe('generateSvg', () => {
    test('should set correct yValue for Triangle shape', () => {
        const shape = { render: jest.fn() };
        const answers = { logoShape: 'Triangle', textColour: 'black', logoText: 'TST' };

        const result = generateSvg(shape, answers);

        // Assuming Triangle shape sets yValue to "60%"
        expect(result).toContain('y="60%"');
    });

    test('should set correct yValue for other shapes', () => {
        const shape = { render: jest.fn() };
        const answers = { logoShape: 'OtherShape', textColour: 'black', logoText: 'TST' };

        const result = generateSvg(shape, answers);

        // Assuming other shapes set yValue to "50%"
        expect(result).toContain('y="50%"');
    });
});