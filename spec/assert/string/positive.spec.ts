import Positive from "../../../dist/assert/string/positive";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Positive(Infinity, true)).toBe('value "Infinity" is positive');
        expect(Positive(Infinity, false)).toBe('value "Infinity" is not positive');
    });

    it(`positive`, () => {
        expect(Positive(-Infinity, true)).toBe('value "-Infinity" is positive');
        expect(Positive(-Infinity, false)).toBe('value "-Infinity" is not positive');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Positive(1, true)).toBe('value "1" is positive');
        expect(Positive(1, false)).toBe('value "1" is not positive');
    });

    it(`positive`, () => {
        expect(Positive(-1, true)).toBe('value "-1" is positive');
        expect(Positive(-1, false)).toBe('value "-1" is not positive');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Positive(1.1, true)).toBe('value "1.1" is positive');
        expect(Positive(1.1, false)).toBe('value "1.1" is not positive');
    });

    it(`float`, () => {
        expect(Positive(-1.1, true)).toBe('value "-1.1" is positive');
        expect(Positive(-1.1, false)).toBe('value "-1.1" is not positive');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Positive(NaN, true)).toBe('value "NaN" is positive');
        expect(Positive(NaN, false)).toBe('value "NaN" is not positive');
    });

});
