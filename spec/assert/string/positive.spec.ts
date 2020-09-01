import Positive from "../../../dist/assert/string/positive";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Positive(true, Infinity )).toBe('Infinity is positive');
        expect(Positive(false, Infinity )).toBe('Infinity is not positive');
    });

    it(`positive`, () => {
        expect(Positive(true, -Infinity )).toBe('-Infinity is positive');
        expect(Positive(false, -Infinity )).toBe('-Infinity is not positive');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Positive(true, 1 )).toBe('1 is positive');
        expect(Positive(false, 1 )).toBe('1 is not positive');
    });

    it(`positive`, () => {
        expect(Positive(true, -1 )).toBe('-1 is positive');
        expect(Positive(false, -1 )).toBe('-1 is not positive');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Positive(true, 1.1 )).toBe('1.1 is positive');
        expect(Positive(false, 1.1 )).toBe('1.1 is not positive');
    });

    it(`float`, () => {
        expect(Positive(true, -1.1 )).toBe('-1.1 is positive');
        expect(Positive(false, -1.1 )).toBe('-1.1 is not positive');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Positive(true, NaN )).toBe('NaN is positive');
        expect(Positive(false, NaN )).toBe('NaN is not positive');
    });

});
