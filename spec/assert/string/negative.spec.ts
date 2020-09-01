import Negative from "../../../dist/assert/string/negative";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Negative(true, Infinity)).toBe('Infinity is negative');
        expect(Negative(false, Infinity)).toBe('Infinity is not negative');
    });

    it(`negative`, () => {
        expect(Negative(true, -Infinity)).toBe('-Infinity is negative');
        expect(Negative(false, -Infinity)).toBe('-Infinity is not negative');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Negative(true, 1)).toBe('1 is negative');
        expect(Negative(false, 1)).toBe('1 is not negative');
    });

    it(`negative`, () => {
        expect(Negative(true, -1)).toBe('-1 is negative');
        expect(Negative(false, -1)).toBe('-1 is not negative');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Negative(true, 1.1)).toBe('1.1 is negative');
        expect(Negative(false, 1.1)).toBe('1.1 is not negative');
    });

    it(`float`, () => {
        expect(Negative(true, -1.1 )).toBe('-1.1 is negative');
        expect(Negative(false, -1.1 )).toBe('-1.1 is not negative');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Negative(true, NaN)).toBe('NaN is negative');
        expect(Negative(false, NaN)).toBe('NaN is not negative');
    });

});
