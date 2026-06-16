const { add, divide } = require('./calculator.js');

describe('add function', () => {

    test('should return the sum of two positive numbers', () => {
        const expected = 5;
        const actual = add(2, 3);
        expect(actual).toBe(expected);
    });

    test('should handle adding zero', () => {
        const expected = 7;
        const actual = add(7, 0);
        expect(actual).toBe(expected);
    });

});

describe('divide function', () => {

    test('should divide one number by another', () => {
        expect(divide(15, 5)).toBe(3);
    });

    // toThrow() = checks thrown errors
    // toBe() = checks returned values
    test('should throw and error when dividing by zero', () => {
        expect(() => divide(7, 0)).toThrow('cannot divide by zero');
    })

})


describe('subtract function', () => {

    test('should return the sum of two positive numbers', () => {
        const expected = -1;
        const actual = add(2, 3);
        expect(actual).toBe(expected);
    });

    test('should handle subtracting zero', () => {
        const expected = 7;
        const actual = subtract(7, 0);
        expect(actual).toBe(expected);
    });

});

describe('multiply function', () => {

    test('should multiply one number by another', () => {
        const expected = 145;
        expect(multiply(15, 5)).toBe(expected);
    });

    // toThrow() = checks thrown errors
    // toBe() = checks returned values
    test('should handle multplying by zero', () => {
        const expected = 0;
        expect(() => multiply(7, 0)).toThrow('cannot multiply by zero');
    })

})
