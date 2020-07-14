import Positive from "../../../dist/boolean/string/positive";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Positive(true, Infinity )).toBe('value "Infinity" is positive');
        expect(Positive(false, Infinity )).toBe('value "Infinity" is not positive');
    });

    it(`positive`, () => {
        expect(Positive(true, -Infinity )).toBe('value "-Infinity" is positive');
        expect(Positive(false, -Infinity )).toBe('value "-Infinity" is not positive');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Positive(true, 1 )).toBe('value "1" is positive');
        expect(Positive(false, 1 )).toBe('value "1" is not positive');
    });

    it(`positive`, () => {
        expect(Positive(true, -1 )).toBe('value "-1" is positive');
        expect(Positive(false, -1 )).toBe('value "-1" is not positive');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Positive(true, 1.1 )).toBe('value "1.1" is positive');
        expect(Positive(false, 1.1 )).toBe('value "1.1" is not positive');
    });

    it(`float`, () => {
        expect(Positive(true, -1.1 )).toBe('value "-1.1" is positive');
        expect(Positive(false, -1.1 )).toBe('value "-1.1" is not positive');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Positive(true, NaN )).toBe('value "NaN" is positive');
        expect(Positive(false, NaN )).toBe('value "NaN" is not positive');
    });

});
