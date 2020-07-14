import Infinite from "../../../dist/boolean/string/infinite";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Infinite(true, Infinity)).toBe('value "Infinity" is infinite');
        expect(Infinite(false, Infinity)).toBe('value "Infinity" is not infinite');
    });

    it(`negative`, () => {
        expect(Infinite(true, -Infinity)).toBe('value "-Infinity" is infinite');
        expect(Infinite(false, -Infinity)).toBe('value "-Infinity" is not infinite');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Infinite(true, 1)).toBe('value "1" is infinite');
        expect(Infinite(false, 1)).toBe('value "1" is not infinite');
    });

    it(`negative`, () => {
        expect(Infinite(true, -1)).toBe('value "-1" is infinite');
        expect(Infinite(false, -1)).toBe('value "-1" is not infinite');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Infinite(true, 1.1)).toBe('value "1.1" is infinite');
        expect(Infinite(false, 1.1)).toBe('value "1.1" is not infinite');
    });

    it(`float`, () => {
        expect(Infinite(true, -1.1)).toBe('value "-1.1" is infinite');
        expect(Infinite(false, -1.1)).toBe('value "-1.1" is not infinite');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Infinite(true, NaN)).toBe('value "NaN" is infinite');
        expect(Infinite(false, NaN)).toBe('value "NaN" is not infinite');
    });

});
