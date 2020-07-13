import Negative from "../../../dist/assert/string/negative";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Negative(Infinity, true)).toBe('value "Infinity" is negative');
        expect(Negative(Infinity, false)).toBe('value "Infinity" is not negative');
    });

    it(`negative`, () => {
        expect(Negative(-Infinity, true)).toBe('value "-Infinity" is negative');
        expect(Negative(-Infinity, false)).toBe('value "-Infinity" is not negative');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Negative(1, true)).toBe('value "1" is negative');
        expect(Negative(1, false)).toBe('value "1" is not negative');
    });

    it(`negative`, () => {
        expect(Negative(-1, true)).toBe('value "-1" is negative');
        expect(Negative(-1, false)).toBe('value "-1" is not negative');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Negative(1.1, true)).toBe('value "1.1" is negative');
        expect(Negative(1.1, false)).toBe('value "1.1" is not negative');
    });

    it(`float`, () => {
        expect(Negative(-1.1, true)).toBe('value "-1.1" is negative');
        expect(Negative(-1.1, false)).toBe('value "-1.1" is not negative');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Negative(NaN, true)).toBe('value "NaN" is negative');
        expect(Negative(NaN, false)).toBe('value "NaN" is not negative');
    });

});
